function isPrime(num) {
  if (num === 2) return true;
  if (num % 2 === 0 || num < 2) return false;
  for (let i = 3; i * i <= num; i+=2) {
    if (num % i === 0) return false;
  }
  return true;
}
function checkIsPrime(a) {
    if (!Array.isArray(a)) {
        console.log("Dữ liệu không hợp lệ");
        return;
    }
    if (a.length === 0) {
        console.log("Mảng không có phần tử");
        return;
    }
    let result = a.filter(num => isPrime(num));
    console.log(result.join(" "));
}
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let a1 = [];
let a2 ="abc";
checkIsPrime(a);
checkIsPrime(a1);
checkIsPrime(a2);
