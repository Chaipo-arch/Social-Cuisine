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
DECLARE user_count INT;

    SELECT COUNT(*) INTO user_count FROM user WHERE username = user.username;
    
    IF user_count = 0 Or null THEN
        INSERT INTO user(username, mdp) VALUES (username, MD5(mdp));
        SELECT 'Utilisateur créé avec succès.' AS message , 1 AS success;
    ELSE
		SELECT 'Le Nom d\'utilisateur existe déja' AS message , 2 AS success;
    END IF;
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

DROP procedure if exists get_Information;
DELIMITER //
CREATE procedure get_UserInformation(IN ID INT)
BEGIN
	select * FROM user WHERE userID = ID;
END //
DELIMITER ;
	
        Drop procedure if exists GetUserJSON;

    DELIMITER //

CREATE PROCEDURE GetUserJSON(IN p_userID INT)
BEGIN
    SELECT JSON_OBJECT(
        'id', userId,
        'username', username,
        'email', mail,
		'birth_date', birth_date,
        'city', city,
        'code_postal', code_postal,
        'adresse', adresse
    ) AS user_json
    FROM user
    WHERE userId = p_userID;
END //

DELIMITER ;

CALL GetUserJSON(1);


Drop procedure if exists PostUserJSON;
DELIMITER //

CREATE PROCEDURE PostUserJSON(IN user_info json ,userID INT)
BEGIN
	DECLARE user_adresse VARCHAR(255);
    DECLARE user_email VARCHAR(255);
	DECLARE user_city varchar(255);
    DECLARE user_birth_date date;
    DECLARE user_code_postal INT;
    
    SET user_adresse = JSON_UNQUOTE(JSON_EXTRACT(user_info, '$.username'));
    SET user_email = JSON_UNQUOTE(JSON_EXTRACT(user_info, '$.mail'));
	SET user_city = JSON_UNQUOTE(JSON_EXTRACT(user_info, '$.city'));
    SET user_birth_date = JSON_UNQUOTE(JSON_EXTRACT(user_info, '$.birth_date'));
	SET user_code_postal = JSON_UNQUOTE(JSON_EXTRACT(user_info, '$.code_postal'));

    UPDATE user
    SET adresse = user_adresse , mail = user_email  , city = user_city , code_postal = user_code_postal
    WHERE userID = userID ;
    SELECT 'Utilisateur créé avec succès.' AS message , 1 AS success;

END //
DELIMITER ; 


CALL GetUserJSON(3);
