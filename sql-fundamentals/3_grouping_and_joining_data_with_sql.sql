USE sql_fundamentals;

SELECT * 
FROM sql_fundamentals.movies;

#Aggregate Functions for Calculations
SELECT genre, SUM(gross) AS gross_per_genre
FROM sql_fundamentals.movies
GROUP BY genre;

#Group the movies dataset by rating and use the aggregate function ‘COUNT’ on it. How many PG-rated movies are there in the dataset?
#PG = 40
SELECT rating, COUNT(*) AS num_movies
FROM movies
GROUP BY rating;

#Group the movies dataset by genre and use the aggregate function ‘MAX’. What is the maximum gross for the genre ‘Action’?
#Action = 538375067
SELECT genre, MAX(gross) AS max_gross
FROM movies
WHERE genre = 'Action';

#Using the movies dataset, what is the average score achieved by the Fantasy genre for the movies that were released after 1980? (not including 1980)
#avg_score = 6.2 
SELECT AVG(score) AS avg_score
FROM movies
WHERE genre = 'Fantasy'
AND released_year > 1980;

#Introduction to Join Statements
SELECT *
FROM dataset1
__ JOIN dataset2
ON dataset1.id = dataset2.id;


USE lego;

#Left Join
SELECT *
FROM Lego.sets
LEFT JOIN Lego.themes
ON Lego.themes.id = Lego.sets.theme_id;

#Using the Lego dataset, execute a left join on the common key value of both sets and themes and order them in descending order by their number of parts. Lastly, limit the rows by 1. What is the name of the set and theme shown in the output? (Hint: select both lego.sets.name and lego.themes.name)
#Taj Mahal, Sculptures
SELECT lego.sets.name, lego.themes.name, lego.sets.num_parts
FROM lego.sets
LEFT JOIN lego.themes
ON lego.sets.theme_id = lego.themes.id
ORDER BY lego.sets.num_parts DESC
LIMIT 1;

#Right Join
SELECT *
FROM Lego.themes
RIGHT JOIN Lego.sets
ON Lego.themes.id = Lego.sets.theme_id;

#Inner Join
SELECT *
FROM Lego.themes
INNER JOIN Lego.sets
ON Lego.themes.id = Lego.sets.theme_id;

#Full Join
SELECT column1
FROM table1
UNION
SELECT column1
FROM table2;

SELECT *
FROM table1
LEFT JOIN table2
ON table1.column = table2.column
UNION
SELECT *
FROM table1
RIGHT JOIN table2
ON table1.column = table2.column;

SELECT *
FROM Lego.sets
LEFT JOIN Lego.themes
ON Lego.sets.theme_id = Lego.themes.id
UNION
SELECT *
FROM Lego.themes
RIGHT JOIN Lego.sets
ON Lego.themes.id = Lego.sets.theme_id;

#The key difference between INNER JOIN AND FULL JOIN:
#INNER JOIN returns matching rows, while FULL JOIN returns rows from both tables, including unmatched rows and null values.

#Top 5 themes that have the most number of parts
SELECT Lego.themes.name, SUM(Lego.sets.num_parts) AS total_parts
FROM Lego.sets
INNER JOIN Lego.themes 
ON Lego.sets.theme_id = themes.id
GROUP BY Lego.themes.name
ORDER BY total_parts DESC
LIMIT 5;