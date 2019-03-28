USE matcha;

CREATE TABLE IF NOT EXISTS users (
  id VARCHAR(10) PRIMARY KEY,
  pseudo VARCHAR(10),
  name VARCHAR(25),
  firstname VARCHAR(25),
  mail VARCHAR(50),
  password VARCHAR(60),
  gender INT(1),
  age INT(2),
  profil_picture VARCHAR(258),
  sexual_orientation INT(1),
  bio VARCHAR(258),
  location VARCHAR(258),
  confirmed INT(1),
  confirmation_code VARCHAR(10),
  forgot INT(1),
  create_date TIMESTAMP
);

CREATE TABLE IF NOT EXISTS interests (
  user_id VARCHAR(10),
  interest VARCHAR(25),
  create_date TIMESTAMP
);

CREATE TABLE IF NOT EXISTS pictures (
  user_id VARCHAR(10),
  picture VARCHAR(258),
  create_date TIMESTAMP
);

CREATE TABLE IF NOT EXISTS tags (
  id MEDIUMINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  tag VARCHAR(25),
  create_date TIMESTAMP
);







