#Track Gas Prices on Dune
#https://dune.com/aguito/gas-station

#Query - Average hourly gas prices in the last 24 hours
SELECT DATE_TRUNC('hour', block_time) AS hour, 
ROUND(AVG(gas_price)/1e9, 2) AS avg_gas_price
FROM ethereum.transactions
WHERE DATE_TRUNC('hour', block_time) >= (
        NOW() - INTERVAL '1' DAY
    )
GROUP BY DATE_TRUNC('hour', block_time)
ORDER BY hour; 

#Query - Gas Prices by day in the past 7 days
WITH 
	day_aggregate AS (
	  SELECT
		EXTRACT(DOW FROM block_time) AS weekday,
		AVG(gas_price / 1e9) AS avg_gas_price,
		APPROX_PERCENTILE(gas_price, 0.5) / 1e9 AS median_gas_price,
		APPROX_PERCENTILE(gas_price, 0.9) / 1e9 AS nine_tenth_gas_price
	  FROM ethereum.transactions
	  WHERE
		block_time /* Filter data for the past 7 days */ >= CURRENT_DATE - INTERVAL '7' day
	  GROUP BY
		1
	)
SELECT
  CASE
    WHEN weekday = 1 THEN 'Monday'
    WHEN weekday = 2 THEN 'Tuesday'
    WHEN weekday = 3 THEN 'Wednesday'
    WHEN weekday = 4 THEN 'Thursday'
    WHEN weekday = 5 THEN 'Friday'
    WHEN weekday = 6 THEN 'Saturday'
    WHEN weekday = 7 THEN 'Sunday'
  END AS "Week weekday",
  weekday,
  avg_gas_price AS "Average",
  median_gas_price AS "Median",
  nine_tenth_gas_price AS "0.9 Percentile"
FROM
  day_aggregate
ORDER BY weekday;


#Track Gas Consumptions on Dune

#Query - Total Gas Paid on DEX daily in the past week
WITH gas_paid_data AS (
  SELECT
    DATE_TRUNC('day', t.block_time) AS truncated_date,
    ROUND(SUM(t.gas_used * (
      t.gas_price / 1e18
    )), 2) AS gas_paid
  FROM ethereum.transactions AS t
  LEFT JOIN dex.trades AS d
    ON t.hash = d.tx_hash
  WHERE
    t.block_time >= CURRENT_DATE - INTERVAL '7' DAY
    AND d.block_time >= CURRENT_DATE - INTERVAL '7' DAY
  GROUP BY
    1
)
SELECT
  truncated_date AS "day",
  gas_paid
FROM gas_paid_data
ORDER BY
  truncated_date DESC;
  
#Query - Proportion of Total Gas Paid on different DEX projects within 1 day
SELECT project, ROUND(SUM(gas_used*(gas_price/1e18))) AS gas_paid FROM dex.trades 
LEFT JOIN ethereum.transactions ON dex.trades.tx_hash = ethereum.transactions.hash
WHERE dex.trades.block_time > NOW() - INTERVAL '1' DAY
GROUP BY project
ORDER BY gas_paid DESC;