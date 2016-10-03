CREATE DATABASE `db`;
use db;

CREATE TABLE TopSubscription(
  ID int(11) NOT NULL AUTO_INCREMENT,
  Subscription_Name varchar(55) DEFAULT NULL,
  Subscription_length varchar(55) DEFAULT NULL,
  Subscription_Plan1 varchar(55) DEFAULT NULL,
  Price1 double DEFAULT NULL,
  Subscription_Plan2 varchar(55) DEFAULT NULL,
  Price2 double DEFAULT NULL,
  Subscription_Plan3 varchar(55) DEFAULT NULL,
  Price3 double DEFAULT NULL,
  Company_url varchar(200) DEFAULT NULL,
  Image_url varchar(200) DEFAULT NULL,
  PhoneNumber varchar(55) DEFAULT NULL,
  PRIMARY KEY (ID)
) ;



CREATE TABLE UserSubscription (
  FullName varchar(55) DEFAULT NULL,
  Length varchar(55) DEFAULT NULL,
  Subscription_Plan varchar(55) DEFAULT NULL,
  Price double DEFAULT NULL,
  PhoneNumber varchar(55) DEFAULT NULL,
  StartDate varchar(55) DEFAULT NULL,
  EndDate varchar(55) DEFAULT NULL,
  Top_Subscription tinyint(1) DEFAULT NULL,
  IconUrl varchar(55) DEFAULT NULL,
  CreditCards varchar(100) DEFAULT NULL,
  ID int(11) NOT NULL AUTO_INCREMENT,
  Subscription_Name varchar(100) DEFAULT NULL,
  Subscription_Url varchar(100) DEFAULT NULL,
  deleteBool tinyint(1) DEFAULT NULL,
  PRIMARY KEY (ID)
) ;

CREATE TABLE Users (
  EmailID varchar(100) NOT NULL,
  Password varchar(100) DEFAULT NULL,
  PRIMARY KEY (EmailID)
) ;


INSERT INTO TopSubscription VALUES (1,'Netflix','monthly','Basic',7.99,'Standard',9.99,'Premium',11.99,'https://www.netflix.com/','http://www.eonline.com/eol_images/Entire_Site/2014423/rs_560x415-140523111130-1024.netflix.jpg','1 (866) 579-7172 '),(2,'Spotify','monthly','Premium',9.99,'',0,'',0,'https://www.spotify.com/us/premium/?checkout=false','http://vignette4.wikia.nocookie.net/nocopyrightsounds/images/f/fe/Spotify-icon.jpg/revision/latest?cb=20151216175322','(917) 565-3894'),(3,'Amazon Prime','monthly','Plan 1(Monthly)',10.99,'Plan 2(Yearly)',99.99,'',0,'https://www.amazon.com/gp/help/customer/display.html?nodeId=200444160','http://www.websitemagazine.com/images/blog/amazon-icon.jpg','(866) 216-1072'),(4,'Pandora','monthly','Plan 1(Monthly)',4.99,'Plan 2(Yearly)',54.89,'',0,'http://help.pandora.com/customer/portal/articles/84834-pandora-one#4','https://cdn2.iconfinder.com/data/icons/metro-ui-dock/128/Pandora_alt.png','(510) 451-4100'),(5,'Music','monthly','Individual Membership',9.99,'Family Membership',14.99,'Student Membership',4.99,'http://www.apple.com/music/membership/','http://core0.staticworld.net/images/article/2015/07/apple-new-music-and-itunes-icon-100594577-orig.jpg','(408) 974-2042');


INSERT INTO `Users` VALUES ('dasmoumita@gmail.com','Ready2go');

INSERT INTO `UserSubscription` VALUES ('Tanushree','Weekly','Plan 1',7.99,'4697896814',' 08-24-2016','08-22-2017',1,'www.msn.com',NULL,1,NULL,NULL,1),('Tulika','weekly,plan1','undefined',8.99,'7896813425','08-24-2016','08-29-2016',1,'ww.google.com','456',67,'verizonweekly','www.yahoo.com',0);


