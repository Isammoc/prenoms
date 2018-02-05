package controllers

import scala.concurrent.ExecutionContext

import javax.inject.Inject
import models.Item
import models.Vote
import models.VoteDAO
import play.api.libs.json.Json
import play.api.mvc.AbstractController
import play.api.mvc.ControllerComponents
import play.api.libs.json.Reads
import play.api.libs.json._
import play.api.libs.functional.syntax._
import scala.concurrent.Future

class AppController @Inject() (voteDAO: VoteDAO, cc: ControllerComponents)(implicit ec: ExecutionContext) extends AbstractController(cc) {

  def getVote(who: Int) = Action.async {
    implicit val itemWriter = Json.writes[Item]
    implicit val voteWriter = Json.writes[Vote]
    voteDAO.newVote(who).map(v => Ok(Json.toJson(v)))
  }

  def postVote(who: Int) = Action.async(parse.json) { request =>
    case class Voted(better: Long, lesser: Long)
    implicit val voteReads: Reads[Voted] = (
      (__ \ "better").read[Long] and
      (__ \ "lesser").read[Long])(Voted.apply _)
    request.body.validate[Voted].fold(
      error => Future.successful(BadRequest("not good")),
      valid => voteDAO.vote(who, valid.better, valid.lesser).map(_ => Ok))
  }

  def veto(who: Int, id: Long) = Action.async {
    voteDAO.veto(id).map(f => Ok)
  }
}