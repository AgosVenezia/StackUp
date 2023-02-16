/*
Write a program that calculates the total number of primes under a number given by the user.
*/

const start = performance.now();

function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function countPrimes(n) {
  let count = 0;
  for (let i = 2; i < n; i++) {
    if (isPrime(i)) {
      count++;
    }
  }
  return count;
}

const userNumber = prompt("Please enter a number:");
const totalCount = countPrimes(userNumber);

console.log(`There are ${totalCount} primes under ${userNumber}.`);

const end = performance.now();  
console.log(`Time taken: ${end - start} milliseconds`);