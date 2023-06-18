DROP Database if exists cuisine;
CREATE Database cuisine;
use cuisine;
DROP TABLE if exists user;
CREATE TABLE user(
	username varchar(30),
	mdp text,
	userID integer auto_increment primary key
	
);

