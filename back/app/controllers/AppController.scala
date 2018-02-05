package controllers

import play.api.mvc.AbstractController
import play.api.mvc.ControllerComponents
import javax.inject.Inject
import models.VoteDAO
import scala.concurrent.ExecutionContext

class AppController @Inject() (voteDAO: VoteDAO, cc: ControllerComponents)(implicit ec: ExecutionContext) extends AbstractController(cc) {

  def vote(who: Int) = Action.async {
    voteDAO.newVote(who).map(f => Ok(f.toString))
  }

  def veto(who: Int, id: Long) = Action.async {
    voteDAO.veto(id).map(f => Ok)
  }
}