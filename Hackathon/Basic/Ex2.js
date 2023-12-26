const isPrime = (n) => {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
};

let arr2 = [9, 2, 3, 7, 1];
let sum = 0; // sum +=i
// Tính tính: reduce = 1  -> reduce *= i
for (let i = 0; i < arr2.length; i++) {
  if (isPrime(arr2[i])) sum += arr2[i];
}
console.log(sum, "Sum");
