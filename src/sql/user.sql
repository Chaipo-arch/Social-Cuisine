DROP Database if exists cuisine;
CREATE Database cuisine;
use cuisine;
DROP TABLE if exists user;
CREATE TABLE user(
	username varchar(30),
	mdp text,
	userID integer auto_increment primary key,
	mail text
    birth_date date,
    City VARCHAR(64),
    code_postal INT,
    Adresse varchar(64)
);


DROP PROCEDURE IF EXISTS UserCreate;

DELIMITER //

CREATE PROCEDURE UserCreate(IN username VARCHAR(30), IN mdp TEXT)
BEGIN
    INSERT INTO user(username, mdp) VALUES (username, MD5(mdp));
END //

DELIMITER ;

CALL userCreate ("adminTest","adminTest");

DROP PROCEDURE IF EXISTS UserDelete;
DELIMITER //
CREATE PROCEDURE UserDelete(IN ID INT)
BEGIN
    DELETE FROM user WHERE userID = ID;
END //

DELIMITER ;


DROP procedure if exists UserLogin;

DELIMITER //

CREATE PROCEDURE UserLogin(
    IN p_username VARCHAR(30),
    IN p_password TEXT
)
BEGIN    
    -- Vérifier si l'utilisateur existe
    SELECT userID FROM user WHERE username = p_username AND mdp = md5(p_password);
    
END //

DELIMITER ;

CALL userLogin("adminTest","adminTest");