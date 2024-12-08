
let num1 = Math.floor(Math.random() * 16);
let num2 = Math.floor(Math.random() * 16);

let sequence = [num1, num2];


for (let i = 2; i < 10; i++) {
  let nextNum = (sequence[i - 1] + sequence[i - 2]) * 2;
  sequence.push(nextNum);
}


console.log(sequence);
