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

-- Select
-- 1. Fetch all of the data from the table.
-- SELECT * FROM students

-- 2. Fetch all of the students first_names and last_names.
-- SELECT first_name, last_name FROM students;

-- 3. For the following questions, only fetch the first_names and last_names of the students.
-- 3.1. Fetch the student which id is equal to 2.
-- SELECT first_name, last_name FROM students
-- WHERE id = 2;

-- 3.2. Fetch the student whose last_name is Benichou AND first_name is Marc.
-- SELECT first_name, last_name FROM students
-- WHERE  last_name = 'Benichou' AND first_name = 'Marc';

-- 3.3. Fetch the students whose last_names are Benichou OR first_names are Marc.
-- SELECT first_name, last_name FROM students
-- WHERE  last_name = 'Benichou' OR first_name = 'Marc';

-- 3.4. Fetch the students whose first_names contain the letter a.
-- SELECT first_name, last_name FROM students
-- WHERE first_name ILIKE '%a%';

-- 3.5. Fetch the students whose first_names start with the letter a.
-- SELECT first_name, last_name FROM students
-- WHERE first_name ILIKE 'a%';

-- 3.6. Fetch the students whose first_names end with the letter a.
-- SELECT first_name, last_name FROM students
-- WHERE first_name ILIKE '%a';

-- 3.7. Fetch the students whose second to last letter of their first_names are a (Example: Leah).


-- 3.8. Fetch the students whose id’s are equal to 1 AND 3 .


-- 4. Fetch the students whose birth_dates are equal to or come after 1/01/2000. (show all their info).