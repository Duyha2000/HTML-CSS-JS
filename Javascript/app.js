let number = 0;

console.log(number++); // In ra number -> ++

// 1

console.log(++number);

console.log(number);

let array1 = [1, 2, 3]; // "1,2,3"

let array2 = [4, 5, 6]; // "4,5,6"

// "1,2,34,5,6"
// let arrConcat = array1.concat(array2);
// console.log(arrConcat);
let arr = [...array1, ...array2];
console.log(arr);
console.log(array1 + array2);

let i = 7;

let result = --i + i++ * 5 - i++ + i;
//            6  + 6 * 5 - 7 + 8
//
// 42

// Sự khác nhau giữa a++ và ++a?
var a = 1,
  b = 2;

{
  let a = 5;

  const b = 10;
}

console.log(a);
console.log(b);
console.log(0.1 + 0.2 == 0.3);
