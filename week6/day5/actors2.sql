-- SELECT * FROM actors

-- Use the table actors to retrieve :

-- The first 4 actors
-- SELECT * FROM actors LIMIT 4

-- The first 4 actors ordered in descending order of the last_name (ie. sorted DESCENDING by the "last_name" column))
-- SELECT * FROM actors ORDER BY last_name DESC LIMIT 4;

-- The actors that have the letter 'e' in their first_name
-- SELECT * FROM actors WHERE first_name ILIKE '%e%';

-- The actors that got at least 5 oscars
-- SELECT * FROM actors WHERE number_oscars >= 5;