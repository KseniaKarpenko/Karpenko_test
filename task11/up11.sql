-- MySQL dump 10.13  Distrib 8.0.25, for Win64 (x86_64)
--
-- Host: localhost    Database: up11
-- ------------------------------------------------------
-- Server version	8.0.25

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `ID` int NOT NULL,
  `userName` int NOT NULL,
  `descr` varchar(45) NOT NULL,
  `createdAt` date NOT NULL,
  `link` varchar(450) NOT NULL,
  `vendorID` int NOT NULL,
  `photoLink` varchar(250) DEFAULT NULL,
  `hashTag` varchar(45) NOT NULL,
  `discount` int NOT NULL,
  `validUntil` date NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,2,'Худи','2021-05-15','https://by.wildberries.ru/catalog/13724854/detail.aspx?targetUrl=MI',2,'https://images.wbstatic.net/c516x688/new/13720000/13724854-1.jpg','одежда',20,'2021-06-20'),(2,4,'Брюки','2021-03-01','https://www.zara.com/by/ru/%D1%82%D1%80%D0%B8%D0%BA%D0%BE%D1%82%D0%B0%D0%B6%D0%BD%D1%8B%D0%B5-%D0%B1%D1%80%D1%8E%D0%BA%D0%B8%C2%A0%E2%80%94-limited-edition-p00014024.html?v1=85913250&v2=1718736',3,'https://static.zara.net/photos///2021/V/0/1/p/0014/024/712/2/w/1280/0014024712_1_1_1.jpg?ts=1615829067683','одежда',50,'2021-04-30'),(3,2,'Чайный набор','2021-05-15','https://www.ozon.ru/context/detail/id/226596397/',4,'https://cdn1.ozone.ru/s3/multimedia-p/wc1200/6038379985.jpg','посуда',36,'2021-06-30'),(4,6,'\"Шестерка воронов\"','2021-03-15','https://oz.by/books/more10613272.html?sbtoken=cec7d4247a6de901380ab59772da5202',1,'https://s2-goods.ozstatic.by/2000/272/613/10/10613272_0.jpg','книга',30,'2021-03-30'),(5,7,'Рюкзак','2021-05-15','lamoda.by/p/he013bwifrw0/bags-herschelsupplyco-ryukzak/',5,'https://a.lmcdn.ru/img600x866/H/E/HE013BWIFRW0_10332006_1_v1.jpg','рюкзак',40,'2021-08-09'),(6,1,'Плойка','2021-03-15','https://oz.by/hairstylers/more10694850.html',1,'https://s1-goods.ozstatic.by/2000/850/694/10/10694850_0.jpg','техника',10,'2021-03-28'),(7,9,'Кеды','2021-03-01','https://www.bershka.com/ru/%D0%BC%D1%83%D0%B6%D1%87%D0%B8%D0%BD%D1%8B/%D0%BE%D0%B4%D0%B5%D0%B6%D0%B4%D0%B0/%D0%BF%D1%80%D0%BE%D1%81%D0%BC%D0%BE%D1%82%D1%80%D0%B5%D1%82%D1%8C-%D0%B2%D1%81%D0%B5/%D0%BC%D1%83%D0%B6%D1%81%D0%BA%D0%B8%D0%B5-%D0%B2%D1%8B%D1%81%D0%BE%D0%BA%D0%B8%D0%B5-%D0%BA%D0%B5%D0%B4%D1%8B-%D1%81-%D1%80%D0%B5%D0%BC%D0%B5%D1%88%D0%BA%D0%BE%D0%BC-c1010331712p102704564.html?colorId=040',6,'https://static.bershka.net/4/photos2/2021/V/1/2/p/2200/760/040/2200760040_1_1_1.jpg?t=1607603467066','обувь',30,'2021-04-08'),(8,6,'Гель для душа','2021-03-15','https://belita-shop.by/katalog/geli-dlya-dusha/gel_dlya_dusha_shokoladnyy_gurme.html',8,'https://belita-shop.by/upload/cacheResize/522/cf5/29bee0cf38fb26d63bd770af835b1c61.jpg','уход',12,'2021-08-30'),(9,3,'Кошелек','2021-05-15','https://makey-shop.by/katalog/koshelki/koshelek-bubles-mini.html',9,'https://makey-shop.by/assets/images/products/609/snimok1.png','кошельки',15,'2021-06-23'),(10,6,'Платье','2021-03-01','https://www.zara.com/by/ru/%D0%BF%D0%BB%D0%B0%D1%82%D1%8C%D0%B5-%D0%BD%D0%B0-%D0%B1%D1%80%D0%B5%D1%82%D0%B5%D0%BB%D1%8F%D1%85--%D0%BB%D0%B8%D0%BC%D0%B8%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%B0%D1%8F-%D0%BA%D0%BE%D0%BB%D0%BB%D0%B5%D0%BA%D1%86%D0%B8%D1%8F-p02473763.html?v1=103429989&v2=1718163',3,'https://static.zara.net/photos///2021/V/0/1/p/2473/763/660/2/w/1280/2473763660_1_1_1.jpg?ts=1615884335495','одежда',40,'2021-05-10');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reviews`
--

DROP TABLE IF EXISTS `reviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reviews` (
  `userId` int NOT NULL,
  `productId` int NOT NULL,
  `review` varchar(45) DEFAULT NULL,
  `rating` int DEFAULT NULL,
  PRIMARY KEY (`userId`,`productId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reviews`
--

LOCK TABLES `reviews` WRITE;
/*!40000 ALTER TABLE `reviews` DISABLE KEYS */;
INSERT INTO `reviews` VALUES (1,6,NULL,0),(2,1,'Приятное качество',4),(2,3,NULL,3),(3,9,NULL,5),(4,2,'',4),(5,4,'Круто!',5),(6,4,'Классная книга',4),(6,8,'Хороший гель',5),(7,4,NULL,5),(9,4,NULL,5);
/*!40000 ALTER TABLE `reviews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `ID` int NOT NULL,
  `userName` varchar(45) NOT NULL,
  `userRole` varchar(45) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Kseniya','Admin'),(2,'Yuliya','Admin'),(3,'Olga','Admin'),(4,'Artyom','Admin'),(5,'Roma','Customer'),(6,'Ilya','Customer'),(7,'Polina','Customer'),(8,'Alina','Customer'),(9,'Ivan','Customer'),(10,'Pavel','Customer');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vendors`
--

DROP TABLE IF EXISTS `vendors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vendors` (
  `ID` int NOT NULL,
  `vendorName` varchar(45) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vendors`
--

LOCK TABLES `vendors` WRITE;
/*!40000 ALTER TABLE `vendors` DISABLE KEYS */;
INSERT INTO `vendors` VALUES (1,'OZ'),(2,'Wildberries'),(3,'ZARA'),(4,'OZON'),(5,'Lamoda'),(6,'Bershka'),(7,'Podarok'),(8,'Belita'),(9,'Макей'),(10,'Мила');
/*!40000 ALTER TABLE `vendors` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-05-21 16:17:37
