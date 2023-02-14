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