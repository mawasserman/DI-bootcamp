-- Database: Hollywood

-- DROP DATABASE IF EXISTS "Hollywood";

-- CREATE DATABASE "Hollywood"
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'English_Israel.1252'
--     LC_CTYPE = 'English_Israel.1252'
--     LOCALE_PROVIDER = 'libc'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;


-- CREATE TABLE actors(
--  actor_id SERIAL PRIMARY KEY,
--  first_name VARCHAR (50) NOT NULL,
--  last_name VARCHAR (100) NOT NULL,
--  age DATE NOT NULL,
--  number_oscars SMALLINT NOT NULL
-- )

-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES('Matt','Damon','08/10/1970', 5);
-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES('George','Clooney','06/05/1961', 2);

-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES('Ingrid','Bergman','29/08/1915', 3);
-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES('Bette','Davis','05/04/1908', 2);

-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES('Jack','Nicholsom','22/04/1937', 3),
-- 	('Meryl','Streep','22/06/1949', 3),
-- 	('Katharine','Hepburn','12/05/1907', 4);
-- SELECT * FROM actors

-- DailyChallenge
-- 1
-- SELECT actor_id FROM actors ORDER BY actor_id DESC LIMIT 1;

-- 2
-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES('Nicolas','Cage','');
-- ERROR:  INSERT has more target columns than expressions
-- LINE 46: INSERT INTO actors (first_name, last_name, age, number_oscar

-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES('Nicolas','Cage','', 1);
-- ERROR:  invalid input syntax for type date: ""
-- LINE 51: VALUES('Nicolas','Cage','', 1)