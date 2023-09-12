document.getElementById('button').addEventListener('click', function() {
    let input = document.getElementById('input').value;
    let output = document.getElementById('output');
  let sequence = [];
  try {
    if (input < 0) {
      throw new Error('Input cannot be negative');
    } else if (input === '') {
      throw new Error('Input cannot be empty');
    } else if (isNaN(input)) {
      throw new Error('Input must be a number');
    } else {
        for (let i = 0; i < input; i++) {
            if (i === 0) {
              sequence.push(0);
            } else if (i === 1) {
              sequence.push(1);
            } else {
              sequence.push(sequence[i - 1] + sequence[i - 2]);
            }
          }
    }
    output.innerHTML = sequence.join(', ');

  } catch (error) {
    output.innerHTML = error;
  } finally {
    alert(`The ${input}th number in the fibonacci sequence is ${sequence[input - 1]}`);
  }
  })