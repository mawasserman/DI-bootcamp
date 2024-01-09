
-- Exercise
-- In the table actors, write the following commands:

-- Get the average number of oscars in the table
-- select avg(number_oscars) from actors

-- Get distinct actors depending on their number of oscars
SELECT first_name, number_oscars
FROM actors
GROUP BY first_name, number_oscars
ORDER BY SUM(number_oscars) DESC;

-- Get the actors born after 01/01/1970
select * from actors where age > '01/01/1970';

-- Get the actors which names are 'David', 'Morgan' or 'Will'
select * from actors where first_name in ('David', 'Morgan', 'Will')
