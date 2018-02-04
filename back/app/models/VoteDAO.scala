package models

import scala.concurrent.ExecutionContext

import javax.inject.Inject
import play.api.db.slick.DatabaseConfigProvider
import play.api.db.slick.HasDatabaseConfigProvider
import slick.jdbc.JdbcProfile
import scala.concurrent.Future
import javax.inject.Singleton

case class Item(id: Long, content: String, vetoable: Boolean)
case class SimpleItem(id: Long, content: String)
case class Preference(who: Int, better: Long, lesser: Long)
case class Vote(a: Item, b: Item)

@Singleton
class VoteDAO @Inject() (protected val dbConfigProvider: DatabaseConfigProvider)(implicit executionContet: ExecutionContext) extends HasDatabaseConfigProvider[JdbcProfile] {
  import profile.api._

  private val SimpleItems = TableQuery[SimpleItemsTable]
  private val Preferences = TableQuery[PreferencesTable]

  private def first(): Future[Option[Item]] = db.run {
    (for {
      f <- SimpleItems
      c = Preferences.filter(c => c.better === f.id || c.lesser === f.id).length
    } yield (f, c)).sortBy(_._1.id).sortBy(_._2).result.headOption.map {
      case Some((f, cc)) => Some(Item(f.id, f.content, cc == 0))
      case None => None
    }
  }

  def newVote(): Future[Option[(Item, Item)]] =
    first.flatMap {
      case Some(a) =>
        println(a)
        (db.run {
          (for {
            (f,d) <- SimpleItems joinLeft (Preferences.filter(_.better === a.id).map(_.lesser) union Preferences.filter(_.lesser === a.id).map(_.better)) if d.isEmpty if f.id =!= a.id
            c = Preferences.filter(c => c.better === f.id || c.lesser === f.id).length
          } yield (f, c)).sortBy(_._1.id).sortBy(_._2).result.headOption
        }).map {
          case Some((b, cc)) =>
            Some((a, Item(b.id, b.content, cc == 0)))
          case None => None
        }
      case None => Future.successful(None)
    }

  private class SimpleItemsTable(tag: Tag) extends Table[SimpleItem](tag, "item") {
    def id = column[Long]("id", O.PrimaryKey)
    def content = column[String]("content", O.Unique)

    def * = (id, content) <> (SimpleItem.tupled, SimpleItem.unapply)
  }

  private class PreferencesTable(tag: Tag) extends Table[Preference](tag, "preference") {
    def who = column[Int]("who")
    def better = column[Long]("better")
    def lesser = column[Long]("lesser")

    def * = (who, better, lesser) <> (Preference.tupled, Preference.unapply)
  }
}
