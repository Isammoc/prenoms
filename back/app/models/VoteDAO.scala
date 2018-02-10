package models

import scala.concurrent.ExecutionContext

import javax.inject.Inject
import play.api.db.slick.DatabaseConfigProvider
import play.api.db.slick.HasDatabaseConfigProvider
import slick.jdbc.JdbcProfile
import scala.concurrent.Future
import javax.inject.Singleton

case class Item(id: Long, content: String, vetoable: Boolean)
case class SimpleItem(id: Long, content: String, vetoed: Boolean)
case class Preference(who: Int, better: Long, lesser: Long)
case class Vote(a: Item, b: Item)

case class OneResult(during: Boolean, best: Seq[SimpleItem])
case class Result(father: OneResult, mother: OneResult)

@Singleton
class VoteDAO @Inject() (protected val dbConfigProvider: DatabaseConfigProvider)(implicit executionContet: ExecutionContext) extends HasDatabaseConfigProvider[JdbcProfile] {
  import profile.api._

  private val SimpleItems = TableQuery[SimpleItemsTable]
  private val Preferences = TableQuery[PreferencesTable]

  private val nonVetoedItem = SimpleItems.filterNot(_.vetoed)

  private def myPreferences(who: Int) = Preferences.filter(_.who === who)

  private def first(who: Int): Future[Option[Item]] = db.run {
    (for {
      f <- nonVetoedItem
      c = myPreferences(who).filter(c => c.better === f.id || c.lesser === f.id).length
    } yield (f, c)).sortBy(_._1.id).sortBy(_._2).result.headOption.map {
      case Some((f, cc)) => Some(Item(f.id, f.content, cc == 0))
      case None => None
    }
  }

  private def nonPossibleFirstname(who: Int, firstId: Long) = myPreferences(who).filter(_.better === firstId).map(_.lesser) union myPreferences(who).filter(_.lesser === firstId).map(_.better)

  def newVote(who: Int): Future[Option[Vote]] =
    first(who).flatMap {
      case Some(a) =>
        println(a)
        (db.run {
          (for {
            f <- nonVetoedItem if f.id =!= a.id if !(f.id in nonPossibleFirstname(who, a.id))
            c = myPreferences(who).filter(c => c.better === f.id || c.lesser === f.id).length
          } yield (f, c)).sortBy(_._1.id).sortBy(_._2).result.headOption
        }).map {
          case Some((b, cc)) =>
            Some(Vote(a, Item(b.id, b.content, cc == 0)))
          case None => None
        }
      case None => Future.successful(None)
    }

  def veto(id: Long) = db.run {
    Preferences.filter(p => p.better === id || p.lesser === id).delete andThen
      SimpleItems.filter(_.id === id).map(_.vetoed).update(true)
  }

  def vote(who: Int, better: Long, lesser: Long) = db.run {
    val q1 = (for {
      p <- Preferences if p.who === who && p.better === lesser if !((myPreferences(who).filter(pp => pp.better === p.better && pp.lesser === p.lesser).exists))
    } yield (who, better, p.lesser))

    val q2 = (for {
      p <- Preferences if p.who === who && p.lesser === better if !((myPreferences(who).filter(pp => pp.better === p.better && pp.lesser === p.lesser).exists))
    } yield (who, p.better, lesser))

    DBIO.seq(
      Preferences += Preference(who, better, lesser),
      Preferences.map(_.tuple).forceInsertQuery(q1),
      Preferences.map(_.tuple).forceInsertQuery(q2))
  }

  def oneBest(who: Int) = db.run {
    (for {
      f <- nonVetoedItem
      better = myPreferences(who).filter(_.better === f.id).length
      lesser = myPreferences(who).filter(_.lesser === f.id).length
      score = better - lesser
    } yield (f, score)).sortBy(_._2.desc).take(10).map(_._1).result
  }

  def oneResult(who: Int) = for {
    possibleVote <- newVote(who)
    best <- oneBest(who)
  } yield OneResult(possibleVote.isDefined, best)

  def result =
    for {
      mother <- oneResult(0)
      father <- oneResult(1)
    } yield Result(father, mother)

  private class SimpleItemsTable(tag: Tag) extends Table[SimpleItem](tag, "item") {
    def id = column[Long]("id", O.PrimaryKey)
    def content = column[String]("content", O.Unique)
    def vetoed = column[Boolean]("vetoed")

    def * = (id, content, vetoed) <> (SimpleItem.tupled, SimpleItem.unapply)
  }

  private class PreferencesTable(tag: Tag) extends Table[Preference](tag, "preference") {
    def who = column[Int]("who")
    def better = column[Long]("better")
    def lesser = column[Long]("lesser")
    def tuple = (who, better, lesser)

    def * = tuple <> (Preference.tupled, Preference.unapply)
  }
}
