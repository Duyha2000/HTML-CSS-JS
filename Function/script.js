import { sum } from "./sum.js";

// console.log(sum(2, 3));
// console.log(minus(2, 3));

// function display() {
//   for (let i = 0; i < 5; i++) console.log(i);
// }

// display();

const display = () => {
  for (let i = 0; i < 5; i++)
    document.getElementById("title").innerHTML += `${i} `;
};

display();

document.getElementById("sum").innerHTML = sum(3, 4);

let number = 20;
const isPrime = (number) => {
  if (number < 2) return false;
  for (let i = 2; i < Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
};
if (isPrime(number))
  document.getElementById("prime").innerHTML = `${number} là số nguyên tố`;
else
  document.getElementById(
    "prime"
  ).innerHTML = `${number} ko phải là số nguyên tố`;
