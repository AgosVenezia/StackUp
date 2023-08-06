#Refresher on SQL Syntax

#SELECT keyword is used when we would like to retrieve specific values from a table. SELECT is also often used in conjunction with the following SQL keywords when writing queries.
#FROM keyword is used to define which table we would like to retrieve values from
#WHERE keyword allows us to filter records from our table and records that fulfill a specified condition are returned
#LIMIT keyword is used to define the number of rows that will be returned.
SELECT * 
FROM my_table
WHERE temperature > 38
LIMIT 10;

#The ORDER BY keyword is used in SQL queries to sort data returned by a query either in an ascending or descending order. By default, if we were to omit this keyword, the data will be sorted in an ascending order. 
SELECT * 
FROM my_table
WHERE temperature > 38
ORDER BY temperature DESC
LIMIT 10;

#The GROUP BY keyword is used to organize data that have the same attribute values. Often, we will also see this keyword being used in conjunction with aggregate functions such as SUM, AVG, COUNT to generate summary reports from our table.
SELECT country, COUNT(userId) 
FROM my_table
GROUP BY country
ORDER BY COUNT(userId) DESC
LIMIT 10;


#Write Your First Query on Dune
#https://dune.com/aguito/my-first-dashboard

#Query - Latest price of Ethereum
SELECT price as eth_price
FROM prices.usd_latest
WHERE symbol='ETH'
ORDER BY minute DESC
LIMIT 1;
#eth_price = 1884.52

#Query Latest Transactions on Ethereum
SELECT block_time, hash, (gas_price/1e18) AS gas_price_eth
FROM ethereum.transactions
WHERE block_time > NOW() - INTERVAL '1' DAY
ORDER BY gas_price DESC
LIMIT 10;
#block_time,hash,gas_price_eth
#2023-07-30 14:54:59.000 UTC,0xd5118f540d4ff7d0a38ba64199a1c965f177b81f47e3ff0cbc0d4ae45a438836,1.744222054051e-05
#2023-07-30 14:38:47.000 UTC,0x756249a9f28f3ef4bfd67a75eb7d626dd132ae4477acd23f72755f3ceb2c473b,1.725e-05
#2023-07-30 14:49:23.000 UTC,0x0dd3c471644e9b6cd8167ca859d86894a29a69940932465d1bb731c084cb79ae,1.4228927543898e-05
#2023-07-29 23:39:11.000 UTC,0x1566296a78d72e63b58ccdd155051aed30e80d3165793fa8c91351656da9b18a,1.191812235092e-05
#2023-07-29 19:05:35.000 UTC,0x3ec30b63a64d526e9301eda43f01cdc5dd4e8bf158cf592336fa52698d6d51d0,9.520539080757e-06
#2023-07-30 12:15:23.000 UTC,0x0b69daeef1018b23b0c31de4b877884a0dba0e629d5d3452002a942c26b11068,8.23636674394e-06
#2023-07-29 21:53:23.000 UTC,0x80be20ab60d13dac4eb76df7d28f35256a8e52e8ccace764635f0730d3ea674c,8.110882846838e-06
#2023-07-29 16:04:11.000 UTC,0x6965583fac3a2fb50aa294fb5124256ab07cc7f8f2e8d8213e552afa8a32d846,8.020394672249e-06
#2023-07-30 13:10:47.000 UTC,0x996b7cc156366e0412b7009da0a8d1d316193896ae7394ebc1dfb3bacb1a5c22,7.38722840915e-06
#2023-07-30 05:41:47.000 UTC,0xc569e73da73a4dc7442d8ca3929cebf6e5779321106343fd4b4e30dfa41a3850,6.668629473269e-06

#Query Weekly DEX Volume on Ethereum
SELECT
  project AS "Project",
  ROUND(SUM(TRY_CAST(amount_usd AS DOUBLE)) / 1e6) AS usd_volume_million
FROM dex.trades
WHERE
block_time > (
    CURRENT_TIMESTAMP - (1 * INTERVAL '7' day)
  )
GROUP BY
  project
ORDER BY
  usd_volume_million DESC
LIMIT 10;
#Project,usd_volume_million
#uniswap,5308
#pancakeswap,1452
#curve,576
#DODO,373
#maverick,321
#balancer,257
#quickswap,106
#sushiswap,89
#0x API,48
#thena,41