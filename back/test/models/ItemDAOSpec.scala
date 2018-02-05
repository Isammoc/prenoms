package models

import play.api.test.Helpers._
import org.scalatestplus.play.PlaySpec
import org.scalatestplus.play.guice.GuiceOneAppPerSuite
import play.api.Application
import org.scalatest.Matchers
import play.api.db.evolutions.Evolutions
import play.api.db.DBApi

class DBSpec extends PlaySpec with GuiceOneAppPerSuite {

  "VoteDAO" should {
    def databaseApi(implicit app: Application) = Application.instanceCache[DBApi].apply(app)
    
    def voteDAO(implicit app: Application) = Application.instanceCache[VoteDAO].apply(app)
    
    "test" in {
      Evolutions.applyEvolutions(databaseApi.database("default"))

      1 mustBe 1
      val coucou = await(voteDAO.newVote(0))
      println(coucou)
    }
  }
}