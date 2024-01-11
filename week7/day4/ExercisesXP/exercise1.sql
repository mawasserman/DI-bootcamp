-- Exercise 1: DVD Rental
-- Instructions
-- Get a list of all the languages, from the language table.
select name from language;

-- Get a list of all films joined with their languages – select the following details : film title, description, and language name.
select film.title, film.description, language.name
from film
inner join language
on film.language_id = language.language_id;

-- Get all languages, even if there are no films in those languages – select the following details : film title, description, and language name.
select film.title, film.description, language.name
from film
right outer join language
on film.language_id = language.language_id;

-- Create a new table called new_film with the following columns : id, name. Add some new films to the table.
create table new_film(
id serial primary key,
name varchar (500)
)

insert into new_film (name)
values('Die hard'),
('Mortal kombat'),
('Titanic'),
('Se eu fosse você');

-- Create a new table called customer_review, which will contain film reviews that customers will make.
create table customer_review(
	
-- It should have the following columns:
-- review_id – a primary key, non null, auto-increment.
review_id serial primary key not null,

-- film_id – references the new_film table. The film that is being reviewed.
film_id integer,

-- language_id – references the language table. What language the review is in.
language_id integer references language(language_id),

-- title – the title of the review.
title varchar (500),

-- score – the rating of the review (1-10).
score integer check (score between 1 and 10),

-- review_text – the text of the review. No limit on the length.
review_text text,

-- last_update – when the review was last updated.
last_update timestamp default current_timestamp,
	
-- Think about the DELETE constraint: if a film is deleted, its review should be automatically deleted.
FOREIGN KEY (film_id) REFERENCES new_film(id)
);

select * from customer_review;

-- Add 2 movie reviews. Make sure you link them to valid objects in the other tables.
	INSERT INTO customer_review (film_id, language_id, title, score, review_text)
VALUES
    (1, 1, 'Die Hard', 9, 'The movie had amazing action sequences...'),
    (3, 1, 'Titanic', 8, 'The storytelling was compelling...');

-- Delete a film that has a review from the new_film table, what happens to the customer_review table?
