-- Create another table, called countries, with two fields : country_id and coutry_name. It has no foreign key. It's a table to test the PostgreSQL Joins.

CREATE TABLE countries (
	country_id serial primary key,
	country_name varchar (50)
)
-- Use INNER JOIN, LEFT OUTER JOIN, RIGHT OUTER JOIN, and FULL OUTER JOIN to join the table countries with the table actors, depending on the comparaison of their primary key
-- Look at the results, and analyse them to understand the difference between the types of PostgreSQL Joins
SELECT * FROM actors
INNER JOIN countries
ON actors.actor_id = countries.country_id

SELECT * FROM actors
LEFT OUTER JOIN countries
ON actors.actor_id = countries.country_id

SELECT * FROM actors
RIGHT OUTER JOIN countries
ON actors.actor_id = countries.country_id

SELECT * FROM actors
FULL OUTER JOIN countries
ON actors.actor_id = countries.country_id

UPDATE actors SET age='1970-01-01' WHERE first_name='Matt' AND last_name='Damon';

-- day5
UPDATE actors 
SET age='1970-01-01' 
WHERE first_name='Matt' AND last_name='Damon'
RETURNING 
    actor_id,
    first_name, 
    last_name,
    age;