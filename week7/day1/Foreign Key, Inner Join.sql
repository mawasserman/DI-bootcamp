
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
----------------------
CREATE TABLE movies(
movie_id SERIAL,
movie_title VARCHAR (50) NOT NULL,
movie_story TEXT,
actor_playing_id INTEGER,
PRIMARY KEY (movie_id),
FOREIGN KEY (actor_playing_id) REFERENCES actors (actor_id)
);

INSERT INTO movies (movie_title, movie_story, actor_playing_id) VALUES
    ( 'Good Will Hunting', 
    'Written by Affleck and Damon, the film follows 20-year-old South Boston janitor Will Hunting',
    (SELECT actor_id from actors WHERE first_name='Matt' AND last_name='Damon')),
    ( 'Oceans Eleven', 
    'American heist film directed by Steven Soderbergh and written by Ted Griffin.', 
    (SELECT actor_id from actors WHERE first_name='Matt' AND last_name='Damon'));


-- Create another table producers, with a foreign key : the id of a movie. The producers table is linked to the movies table
CREATE TABLE producers (
    prod_id SERIAL,
    movie_title VARCHAR(50) NOT NULL,
    prod_name VARCHAR(100) NOT NULL,
    movie_done_id INTEGER,
    PRIMARY KEY(prod_id),
    FOREIGN KEY (movie_done_id) REFERENCES movies (movie_id)
);

select * from movies

-- Insert some record
INSERT INTO producers (movie_title, prod_name, movie_done_id) 
VALUES 
    ('Good Will Hunting', 'Scott Rudin', 1),
    ('Good Will Hunting', 'Lawrence Bender', 1),
    ('Oceans Eleven', 'Jerry Weintraub', 2),
    ('Oceans Eleven', 'Steven Soderbergh', 2);
	
-- Display with INNER JOIN
select * from producers
inner join movies
on producers.movie_done_id = movies.movie_id;