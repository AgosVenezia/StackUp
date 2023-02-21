/*
Write a program that calculates the total number of primes under a number given by the user.
*/

const start = performance.now();

function countPrimes(n) {
  // Create a boolean array "isPrime[0..n]" and initialize all entries as true.
  // A value in isPrime[i] will finally be false if i is Not a prime, else true.
  let isPrime = [];
  for (let i = 0; i <= n; i++) {
    isPrime.push(true);
  }

  // Traverse all numbers from 2 to sqrt(n) and mark their multiples as composite.
  for (let i = 2; i * i <= n; i++) {
    // If isPrime[i] is not changed, then it is a prime.
    if (isPrime[i]) {
      // Update all multiples of i
      for (let j = i * i; j <= n; j += i) {
        isPrime[j] = false;
      }
    }
  }

  // Count the number of primes by counting the number of true values in the isPrime array.
  let count = 0;
  for (let i = 2; i <= n; i++) {
    if (isPrime[i]) {
      count++;
    }
  }
  return count;
}

// Example usage:
const n = 10000000;
const numPrimes = countPrimes(n);
console.log(`There are ${numPrimes} prime numbers under ${n}.`);

const end = performance.now();  
console.log(`Time taken: ${end - start} milliseconds`);