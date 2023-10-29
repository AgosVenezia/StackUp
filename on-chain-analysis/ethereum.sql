/*As an example, let’s write a query to get useful data on Ethereum's daily active and passive users in 2023. Here’s an applicable SQL code that queries the number of distinct addresses that sent and received a transaction on Ethereum in 2023.*/

SELECT  
 -- truncate time to day
 date_trunc('day', block_time) AS time,
 -- count distinct addresses that sent a transaction
 COUNT(distinct "from") AS users,
 -- count distinct addresses that received a transaction
 COUNT(distinct "to") AS receiving_addresses
FROM ethereum.transactions
WHERE block_time > DATE '2023-01-01'
GROUP BY 1;