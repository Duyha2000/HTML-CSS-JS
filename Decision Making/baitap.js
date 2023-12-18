// let numberRandom = parseInt(prompt("Nhập 1 số bất kỳ:"));
// if (numberRandom % 2 === 0) console.log("Even number");
// else console.log("odd number");

// ? :
// let result = numberRandom % 2 === 0 ? "Even number" : "Odd number";
// document.getElementById("title").innerHTML = result;
// console.log(result);

// BT2:
// let wage1 = parseInt(prompt("Nhập lương người thứ nhất:"));
// let wage2 = parseInt(prompt("Nhập lương người thứ hai:"));
// let result = "";
// if (wage1 > wage2) result = "Person 1";
// else if (wage1 === wage2) result = "Lương bằng nhau";
// else result = "Person 2";

// console.log(result);
// document.getElementById("title").innerHTML = result;

// BT3:
let character = prompt("Nhập 1 từ bất kì"); // hello
let b = character.toUpperCase(); // HELLO
let c = character.toLowerCase(); // hello

let result = "";
if (character === b) result = "upper-case alphabet";
else if (character === c) result = "lower-case alphabet";
else result = "not an alphabet";
console.log(result);
document.getElementById("title").innerHTML = result;
