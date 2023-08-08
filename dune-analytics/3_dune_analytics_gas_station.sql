#BOUNTY - Dune Analytics Gas Station 2.0
#https://dune.com/aguito/gas-station

#Daily Transactions across Ethereum, Optimism and Arbitrum
WITH ethereum_transactions AS (
  SELECT
    date_trunc('day', block_time) AS date,
    COUNT(*) AS ethereum_daily_txn
  FROM ethereum.transactions
  GROUP BY DATE_TRUNC('day', block_time)
),
optimism_transactions AS (
  SELECT
    date_trunc('day', block_time) AS date,
    COUNT(*) AS optimism_daily_txn
  FROM optimism.transactions
  GROUP BY DATE_TRUNC('day', block_time)
),
arbitrum_transactions AS (
  SELECT
    date_trunc('day', block_time) AS date,
    COUNT(*) AS arbitrum_daily_txn
  FROM arbitrum.transactions
  GROUP BY DATE_TRUNC('day', block_time)
),
all_dates AS (
    SELECT date FROM ethereum_transactions
    UNION
    SELECT date FROM optimism_transactions
    UNION
    SELECT date FROM arbitrum_transactions
)
SELECT
  d.date,
  COALESCE(e.ethereum_daily_txn, 0) AS ethereum_daily_txn,
  COALESCE(o.optimism_daily_txn, 0) AS optimism_daily_txn,
  COALESCE(a.arbitrum_daily_txn, 0) AS arbitrum_daily_txn
FROM
  all_dates d
LEFT JOIN
  ethereum_transactions e ON d.date = e.date
LEFT JOIN
  optimism_transactions o ON d.date = o.date
LEFT JOIN
  arbitrum_transactions a ON d.date = a.date
ORDER BY
  d.date DESC
LIMIT 50;

#Hourly Average Gas Prices in USD across Ethereum, Optimism and Arbitrum
WITH ethereum_gas_prices AS (
    SELECT
      DATE_TRUNC('hour', block_time) AS hour,
      ROUND(AVG(gas_price * gas_used) / 1e9, 2) AS ethereum_gas_usd
    FROM ethereum.transactions
    WHERE block_time >= NOW() - INTERVAL '1' DAY
    GROUP BY DATE_TRUNC('hour', block_time)
  ),
optimism_gas_prices AS (
    SELECT
      DATE_TRUNC('hour', block_time) AS hour,
      ROUND(AVG(gas_price * gas_used + l1_fee) / 1e9, 2) AS optimism_gas_usd
    FROM optimism.transactions
    WHERE block_time >= NOW() - INTERVAL '1' DAY
    GROUP BY DATE_TRUNC('hour', block_time)
  ),
arbitrum_gas_prices AS (
    SELECT
      DATE_TRUNC('hour', block_time) AS hour,
      ROUND(AVG(gas_price + gas_used * effective_gas_price) / 1e9,2) AS arb_gas_usd
    FROM arbitrum.transactions
    WHERE block_time >= NOW() - INTERVAL '1' DAY
    GROUP BY DATE_TRUNC('hour', block_time)
  )
SELECT
  eth.hour, eth.ethereum_gas_usd, opt.optimism_gas_usd, arb.arb_gas_usd
FROM ethereum_gas_prices AS eth
  INNER JOIN optimism_gas_prices opt ON eth.hour = opt.hour
  INNER JOIN arbitrum_gas_prices arb ON eth.hour = arb.hour
ORDER BY eth.hour DESC;

#Build your own query
#Calculate daily gas savings by comparing Ethereum and Arbitrum transactions
WITH ethereum_transactions AS (
  SELECT
    DATE_TRUNC('day', block_time) AS date,
    COUNT(*) AS ethereum_tx_count
  FROM ethereum.transactions
  GROUP BY
    DATE_TRUNC('day', block_time)
), arbitrum_transactions AS (
  SELECT
    DATE_TRUNC('day', block_time) AS date,
    COUNT(*) AS arbitrum_tx_count
  FROM arbitrum.transactions
  GROUP BY
    DATE_TRUNC('day', block_time)
)
SELECT
  COALESCE(e.date, a.date) AS date,
  COALESCE(ethereum_tx_count, 0) AS ethereum_tx_count,
  COALESCE(arbitrum_tx_count, 0) AS arbitrum_tx_count,
  (
    COALESCE(ethereum_tx_count, 0) - COALESCE(arbitrum_tx_count, 0)
  ) AS arbitrum_gas_savings
FROM ethereum_transactions AS e
FULL OUTER JOIN arbitrum_transactions AS a
  ON e.date = a.date
ORDER BY
  COALESCE(e.date, a.date);