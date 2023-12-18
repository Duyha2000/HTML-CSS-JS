// let a = 3;
// while (a < 10) {
//   if (a % 2 === 0) {
//     console.log(`${a} is Even number`);
//   }
//   a++;
// }

// let product = 2;
// while (product <= 10) {
//   product *= 3;
// }
// console.log(product);
// let numberToGuess = parseInt(prompt("Nhập vào số cần đoán (từ 1 đến 10):"));
// let count = 0;
// let guessedNumber;
// let isFlag = true;

// while (isFlag) {
//   guessedNumber = parseInt(prompt("Hãy đoán số:"));
//   count++;

//   if (guessedNumber === numberToGuess) {
//     console.log(`Bạn đã đoán đúng sau ${count} lần thử!`);
//     isFlag = false; // Khi đoán đúng, set isFlag thành false để kết thúc vòng lặp
//   } else console.log("Số bạn đoán chưa đúng. Hãy thử lại!");
// }

// var x = 10;
// if (true) {
//   var y = 20;
//   console.log(x); // accessible
// }

/*
for (let i = 0; i < 5; i++) {
  let y = i * 2;
}

console.log(y); // let có phạm vi trong 1 block, const cũng thế
// var có phạm vi global scope
*/
// True - false -> True thì chạy vào trong if, false chạy vào trong else

// Ép kiểu int

// Truthy và Falsy ()

// let a = "3";
// let b = parseInt(a);
// console.log(b);

// console.log(Boolean(0));
// Falsy: 0 "" Null undefined NaN false

console.log(Boolean(0));
// Truthy: all - Fasly
// && , ||
// Nullish coalesing ?? Optional chaining
// https://completejavascript.com/toan-tu-nullish-coalescing-trong-javascript/
