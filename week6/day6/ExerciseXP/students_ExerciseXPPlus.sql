-- Database: Bootcamp

-- DROP DATABASE IF EXISTS "Bootcamp";

-- CREATE DATABASE "Bootcamp"
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'English_Israel.1252'
--     LC_CTYPE = 'English_Israel.1252'
--     LOCALE_PROVIDER = 'libc'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;

-- CREATE TABLE students(
--  id SERIAL PRIMARY KEY,
--  last_name VARCHAR (50) NOT NULL,
--  first_name VARCHAR (100) NOT NULL,
--  birth_date DATE NOT NULL
-- )

-- Insert
-- 1. Insert the data seen above to the students table. Find the most efficient way to insert the data.
-- INSERT INTO students (first_name, last_name, birth_date)
-- VALUES
-- 	('Marc', 'Benichou', '02/11/1998'),
-- 	('Yoan', 'Cohen', '03/12/2010'),
-- 	('Lea', 'Benichou', '27/07/1987'),
-- 	('Amelia', 'Dux', '07/04/1996'),
-- 	('David', 'Grez', '14/06/2003'),
-- 	('Omer', 'Simpson', '03/10/1980');

-- 2. Insert your last_name, first_name and birth_date to the students table (Take a look at the id given).
-- INSERT INTO students (first_name, last_name, birth_date)
-- VALUES 	('Marcella', 'Wasserman', '09/11/1989');
-- SELECT * FROM students

