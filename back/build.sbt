name := """prenoms"""
organization := "net.isammoc"

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayScala)

scalaVersion := "2.12.3"

libraryDependencies ++= Seq(
  guice,
  "com.typesafe.play" %% "play-slick" % "3.0.3",
  "com.typesafe.play" %% "play-slick-evolutions" % "3.0.3",
  "org.postgresql" % "postgresql" % "42.1.1",

  "org.scalatestplus.play" %% "scalatestplus-play" % "3.1.2" % Test,
  "com.typesafe.slick" %% "slick-testkit" % "3.2.1" % Test,
  "com.h2database" % "h2" % "1.4.196", // % Test,
)

// Adds additional packages into Twirl
//TwirlKeys.templateImports += "net.isammoc.controllers._"

// Adds additional packages into conf/routes
// play.sbt.routes.RoutesKeys.routesImport += "net.isammoc.binders._"

javaOptions in Test += "-Dconfig.file=conf/application.test.conf"