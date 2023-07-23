#Retrieving Data
SELECT name
FROM sql_fundamentals.movies;


#Filtering Data
SELECT *
FROM sql_fundamentals.movies
WHERE score > 7;

SELECT *
FROM sql_fundamentals.movies
WHERE rating = 'R';

SELECT *
FROM sql_fundamentals.movies
WHERE rating = 'R' AND score > 7;


#Ordering Data
SELECT *
FROM sql_fundamentals.movies
ORDER BY score DESC;


#Limiting Number of Rows
SELECT *
FROM sql_fundamentals.movies
LIMIT 10;


#Top 5 Highest Scoring Action Movies
SELECT name
FROM sql_fundamentals.movies
WHERE genre = 'Action'
ORDER BY score DESC
LIMIT 5;


#Top 10 Highest Grossing ‘PG’ Rated Movie
SELECT name
FROM sql_fundamentals.movies
WHERE rating = 'PG' AND budget > 1000000
ORDER BY gross DESC
LIMIT 10;