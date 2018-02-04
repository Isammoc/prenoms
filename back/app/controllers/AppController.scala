package controllers

import play.api.mvc.AbstractController
import play.api.mvc.ControllerComponents
import javax.inject.Inject
import models.VoteDAO
import scala.concurrent.ExecutionContext

class AppController @Inject() (voteDAO: VoteDAO, cc: ControllerComponents)(implicit ec: ExecutionContext) extends AbstractController(cc) {
  def vote = Action.async {
    voteDAO.newVote.map(f => Ok(f.toString))
  }
}