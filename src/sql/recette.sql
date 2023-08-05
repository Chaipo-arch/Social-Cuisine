use cuisine;
DROP TABLE if exists recette;
Create Table recette(
	recette_id INT PRIMARY KEY,
	Title varchar(32),
    upload_Date date,
    last_update_date date,
	description Text ,
	user_id INT,
    FOREIGN KEY (user_id) REFERENCES user(userId)
);

CREATE TABLE Ingredients (
  ingredient_id INT PRIMARY KEY,
  nom_ingredient VARCHAR(255)
);
//api key : YY0fAsT0q0LGIv23s8gPH1pphbKlQixT6ZLZeXP4