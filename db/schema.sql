DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
    id INTEGER NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR (500) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);


-- needed for JAWSDB --
-- DROP DATABASE IF EXISTS burgers_db;

-- CREATE DATABASE burgers_db;
-- USE burgers_db;

-- DROP TABLE burgers;

-- CREATE TABLE burgers (
--     id INT AUTO_INCREMENT NOT NULL,
--     burger_name VARCHAR (500) NOT NULL,
--     devoured BOOLEAN DEFAULT false,
--     createdAt TIMESTAMP NOT NULL,
--     PRIMARY KEY (id)
-- );

