-- --  Exercise 1 : Items And Customers
-- -- Instructions
-- -- We will work on the public database that we created yesterday.

-- -- Use SQL to get the following from the database:
-- -- All items, ordered by price (lowest to highest).
-- SELECT * FROM items ORDER BY items_price;

-- -- Items with a price above 80 (80 included), ordered by price (highest to lowest).
-- SELECT * FROM items WHERE items_price >= 80 ORDER BY items_price DESC;

-- -- The first 3 customers in alphabetical order of the first name (A-Z) – exclude the primary key column from the results.
-- SELECT customers_firstname, customers_lastname FROM customers ORDER BY customers_firstname LIMIT 3;

-- -- All last names (no other columns!), in reverse alphabetical order (Z-A)
-- SELECT customers_lastname FROM customers ORDER BY customers_lastname DESC;
-----------------
