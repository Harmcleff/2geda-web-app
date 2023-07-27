-- MySQL dump 10.13  Distrib 5.7.42, for Linux (x86_64)
--
-- Host: localhost    Database: social
-- ------------------------------------------------------
-- Server version	5.7.42

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `comments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `desc` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `userId` int(11) NOT NULL,
  `postId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `commentUserId` (`userId`),
  KEY `postId` (`postId`),
  CONSTRAINT `commentUserId` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `postId` FOREIGN KEY (`postId`) REFERENCES `posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES (1,'First comment','2023-07-22 11:09:41',2,1),(2,'www','2023-07-24 18:24:17',4,8),(3,'Good','2023-07-26 13:30:18',5,21),(4,'e','2023-07-26 13:30:44',5,21),(5,'Ola','2023-07-26 13:35:09',9,25),(6,'Nice','2023-07-26 13:42:21',6,21);
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `likes`
--

DROP TABLE IF EXISTS `likes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `likes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `postId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `likeeUserId` (`userId`),
  KEY `likePostid` (`postId`),
  CONSTRAINT `likePostid` FOREIGN KEY (`postId`) REFERENCES `posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `likeeUserId` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `likes`
--

LOCK TABLES `likes` WRITE;
/*!40000 ALTER TABLE `likes` DISABLE KEYS */;
INSERT INTO `likes` VALUES (1,5,21),(2,9,25),(3,9,27),(4,6,28),(7,6,21),(8,6,27),(9,6,27),(11,10,29),(12,12,21),(13,12,30),(14,12,30),(15,5,24);
/*!40000 ALTER TABLE `likes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `posts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `desc` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `img` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `userId` int(11) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `userId` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (1,'First Post',NULL,2,'2023-07-22 11:07:27'),(8,'Hello','',4,'2023-07-24 18:16:18'),(9,'ddd',NULL,4,'2023-07-24 21:07:58'),(10,'ddd',NULL,4,'2023-07-24 21:07:58'),(11,'ddd',NULL,4,'2023-07-24 21:07:58'),(12,'ddd',NULL,4,'2023-07-24 21:07:58'),(13,'ddd',NULL,4,'2023-07-24 21:08:00'),(14,'ddd',NULL,4,'2023-07-24 21:08:02'),(15,'ddd',NULL,4,'2023-07-24 21:08:04'),(16,'ssss',NULL,4,'2023-07-24 21:58:21'),(17,'ff','1690236053379bgco.png',4,'2023-07-24 22:00:53'),(18,'ff','1690236053886bgco.png',4,'2023-07-24 22:00:59'),(19,'ava','1690244965750avat.jpg',4,'2023-07-25 00:29:26'),(20,'Sssd','',6,'2023-07-25 01:54:59'),(21,'I Love 2geda ','',7,'2023-07-25 03:29:49'),(22,'I love u  ','',8,'2023-07-25 10:55:36'),(24,'micro','1690378353868355128747_989537292257692_7792503314933151885_n.jpg.webp',5,'2023-07-26 13:32:34'),(25,'Olamiposi','',9,'2023-07-26 13:34:59'),(26,'Bag','1690378548381IMG_4981.jpeg',9,'2023-07-26 13:35:48'),(27,'Bag','1690378548863IMG_4981.jpeg',9,'2023-07-26 13:35:49'),(28,'Maguire','1690378915078IMG_4347.jpeg',6,'2023-07-26 13:41:55'),(29,'Back','',10,'2023-07-26 13:58:49'),(30,'Feels good to be here Buh some features needs to be worked on ','',12,'2023-07-26 14:04:21');
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `relationships`
--

DROP TABLE IF EXISTS `relationships`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `relationships` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `followerUserId` int(11) NOT NULL,
  `followedUserId` int(11) NOT NULL,
  `followingUserId` int(11) NOT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `Id_UNIQUE` (`Id`),
  KEY `followerUserId` (`followerUserId`),
  KEY `followedUserId` (`followedUserId`),
  KEY `followingUserId` (`followingUserId`),
  CONSTRAINT `followedUserId` FOREIGN KEY (`followedUserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `followerUserId` FOREIGN KEY (`followerUserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `followingUserId` FOREIGN KEY (`followingUserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `relationships`
--

LOCK TABLES `relationships` WRITE;
/*!40000 ALTER TABLE `relationships` DISABLE KEYS */;
INSERT INTO `relationships` VALUES (1,4,1,1),(4,5,7,7),(5,6,7,7),(7,9,7,7),(8,6,8,8),(9,6,9,9),(10,12,7,7),(12,10,11,11),(13,10,8,8);
/*!40000 ALTER TABLE `relationships` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stories`
--

DROP TABLE IF EXISTS `stories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `stories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `stories` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `userId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  CONSTRAINT `storiesUserId` FOREIGN KEY (`id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stories`
--

LOCK TABLES `stories` WRITE;
/*!40000 ALTER TABLE `stories` DISABLE KEYS */;
/*!40000 ALTER TABLE `stories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `dob` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `number` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `coverPic` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT 'prof-ac7f7829.jpeg',
  `profilePic` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT '1690244965750avat.jpg',
  `city` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `website` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `gender` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `instagram` varchar(250) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `facebook` varchar(250) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `twitter` varchar(250) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `linkedin` varchar(250) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'na88me','mido@gmail.com','20-01-2021','08062422607','$2a$10$Bh/Kut99OiklYVPlgZV15.fpdFc/gnVX9sgnmIo8aMqK2kwIExSvG','Hammed',NULL,NULL,NULL,NULL,'male',NULL,NULL,NULL,NULL),(2,'cleff','mido@gmail.com','20-01-2021','08062422607','$2a$10$NoHthgnsi46eYT0WGU/IkeuMabaj8F/xTCQOvLaNHPhK5wDWVC7Ii','Hammed',NULL,NULL,NULL,NULL,'male',NULL,NULL,NULL,NULL),(3,'jamal','mido@gmail.com','20-01-2021','08062422607','$2a$10$k1qzBcsFqZnmzjl150cVruIZOaiWn3QvoSLSSQbHqIyQMaQ/42SbG','Hammed',NULL,NULL,NULL,NULL,'male',NULL,NULL,NULL,NULL),(4,'mido','sanyaolu.oladimeji@gmail.com','2023-06-27','09069723792','$2a$10$DYtXGqnJtZHwp50ypCT9XOoX30WuzR9Zs19QDuPE9jYyJZ4uJFo8q','Hammed','1690243868044INNOO.jpg.webp','1690243888687pngwing.com (27).png',NULL,NULL,'','cleff',NULL,NULL,NULL),(5,'san','sanyaolu.oladimeji@gmail.com','2023-07-11','5414854234','$2a$10$l6MENk5ucup4QwCA6tTIg.ga9eOfyFqelVkyJSGnbJL5TaJrFOIqm','Ayobami','prof-ac7f7829.jpeg','1690398608539UCScreenshot20230703073623.jpg',NULL,NULL,'',NULL,NULL,NULL,NULL),(6,'Admin','sanharmcleff@gmail.com','2023-07-27','0806469494','$2a$10$kOWmoBIptdDUC88KYYlVE.zutcJ6/ddRPpoJNaWgm84XmJAYd9Hny','Yes',NULL,NULL,NULL,NULL,'',NULL,NULL,NULL,NULL),(7,'Ayo','sanyaoluayobami@gmail.com','2023-07-25','08182967374','$2a$10$TPDcuXsDDFTZbV2ogTlqSeCgNkz/ORQnRwaNUQvJU.cbkoYDavPGO','Ayobami','prof-ac7f7829.jpeg',NULL,NULL,NULL,'',NULL,NULL,NULL,NULL),(8,'Olami','mhizbeebah552@gmail.com','1992-07-25','09069723792','$2a$10$.S5jWcc35Ly0G.kssaKY6.LXnobQhAIy0yHjcwEZArnnIXIT9Rrxi','Akinola beebah','prof-ac7f7829.jpeg','1690244965750avat.jpg',NULL,NULL,'Female',NULL,NULL,NULL,NULL),(9,'Beebah','mhizbeebah552@gmail.com','1999-01-26','09069723792','$2a$10$QyMY6s4QJKwTIRF6g1d62.r4wbwq/k3TxHicE.5OFbzRqib.PbRd.','Akinola','prof-ac7f7829.jpeg','1690244965750avat.jpg',NULL,NULL,'',NULL,NULL,NULL,NULL),(10,'Hammed','mido@hmail.com','2023-07-21','08099828853','$2a$10$4yeg7F04xHMOd1Y7MZfLz.9cvQBVOeJubsgZMPQbDp7mOKMkSB0o.','Akinola beebah','prof-ac7f7829.jpeg',NULL,NULL,NULL,'',NULL,NULL,NULL,NULL),(11,'Alaareef','alareefadegbite@gmail.com','2006-05-16','08072655206','$2a$10$74HrVzhwvUfsE3l/YMhg8.oO23ksDSXZ1aMdstv0OBErsYMd.pfuG','AlAreef ','prof-ac7f7829.jpeg','1690244965750avat.jpg',NULL,NULL,'',NULL,NULL,NULL,NULL),(12,'Alareef','alareefadegbite@gmail.com','2023-07-26','08072655206','$2a$10$SzOKAZX9A1MzsCRAe8OfBO/0X/C6JQQQC4dAC9RXbvVW/nFGe.Rm2','AlAreef ','prof-ac7f7829.jpeg','1690244965750avat.jpg',NULL,NULL,'',NULL,NULL,NULL,NULL),(13,'Idanre','alareefadegbite@gmail.com','2023-07-26','08072655206','$2a$10$ai9zsVaqbIwdAyVRJSQup.58viZI/KZWQQSZm7W3E6FEAPxi8sAJ6','Alareef','prof-ac7f7829.jpeg','1690244965750avat.jpg',NULL,NULL,'',NULL,NULL,NULL,NULL),(14,'Sanolamide ','www@gmail.com','2023-07-28','08099828853','$2a$10$yrGjdADSCGAwuUGi4DWDq.4q7sVUuc7LOh5OTAU0c2m.rIl4KSly6','Cleff','prof-ac7f7829.jpeg','1690383953348IMG_4396.jpeg',NULL,NULL,'Female',NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-07-26 19:18:04
