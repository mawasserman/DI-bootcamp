SELECT first_name, last_name, address_id FROM customer

SELECT * FROM address;

SELECT * FROM city;

SELECT * FROM country;

SELECT customer.address_id, 
customer.first_name, 
customer.last_name, 
concat(address.address, ' ', address.district), 
city.city, 
country.country
from customer
inner join address 
on customer.address_id = address.address_id
inner join city 
ON address.city_id = city.city_id
inner join country 
on city.country_id = country.country_id