-- Database: public

-- DROP DATABASE IF EXISTS public;

-- CREATE DATABASE public
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'English_Israel.1252'
--     LC_CTYPE = 'English_Israel.1252'
--     LOCALE_PROVIDER = 'libc'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;
-- CREATE TABLE items(
--  items_id SERIAL PRIMARY KEY,
--  items_name VARCHAR (50) NOT NULL,
--  items_price SMALLINT NOT NULL
-- )
-- INSERT INTO items (items_name, items_price)
-- VALUES 
-- 	('Small Desk', 100),
-- 	('Large desk', 300),
-- 	('Fan', 80);

-- CREATE TABLE customers(
--  customers_id SERIAL PRIMARY KEY,
--  customers_firstname VARCHAR (50) NOT NULL,
--  customers_lastname VARCHAR (50) NOT NULL
-- -- )
-- INSERT INTO customers (customers_firstname, customers_lastname)
-- VALUES 
-- 	('Greg', 'Jones'),
-- 	('Sandra', 'Jones'),
-- 	('Scott', 'Scott'),
-- 	('Trevor', 'Green'),
-- 	('Melanie', 'Johnson');

-- Use SQL to fetch the following data from the database:
-- 1. All the items.
-- SELECT * FROM items

-- 2. All the items with a price above 80 (80 not included).
-- SELECT * FROM items
-- WHERE items_price > 80;

-- 3. All the items with a price below 300. (300 included)
-- SELECT * FROM items
-- WHERE items_price <= 300;

-- 4. All customers whose last name is ‘Smith’ (What will be your outcome?).
-- SELECT * FROM customers
-- WHERE customers_lastname = 'Smith';
-- Shows nothing...

-- 5. All customers whose last name is ‘Jones’.
-- SELECT * FROM customers
-- WHERE customers_lastname = 'Jones';

-- 6. All customers whose firstname is not ‘Scott’.
SELECT * FROM customers
WHERE customers_firstname != 'Scott';