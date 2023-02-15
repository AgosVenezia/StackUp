/* 
A lucky number is a number with a 6 or an 8 in it. It is unlucky if it has neither a 6 or 8 in, or it has a 6 and an 8 in! Create a program that lists how many lucky numbers there are between two numbers, L and R. Do this without using any strings.
*/

function countLuckyNumbers(L, R) {
    let count = 0;
    for (let i = L; i <= R; i++) {
      let hasSixOrEight = false;
      let hasSixAndEight = false;
      let num = i;
      while (num > 0) {
        let digit = num % 10;
        if (digit === 6 || digit === 8) {
          if (hasSixOrEight && digit !== 6 || hasSixAndEight) {
            hasSixAndEight = true;
            break;
          }
          hasSixOrEight = true;
        }
        num = Math.floor(num / 10);
      }
      if (hasSixOrEight && !hasSixAndEight) {
        count++;
      }
    }
    return count;
  } 

console.log(countLuckyNumbers(1, 20)); // output: 4
console.log(countLuckyNumbers(1, 100)); // output: 34
console.log(countLuckyNumbers(1, 1000)); // output: 434