DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
    devoured TINYINT,
	PRIMARY KEY (id)
);


-- Insert a set of records.
INSERT INTO burgers (burger_name) VALUES ('Double Cheese');
INSERT INTO burgers (burger_name) VALUES ('Veggie');
INSERT INTO burgers (burger_name) VALUES ('Peanut Butter');

