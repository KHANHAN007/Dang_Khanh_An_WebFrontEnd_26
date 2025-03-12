function isPrime(num) {
    if (num === 2) return false;
    if (num % 2 === 0 || num < 2) return false;
    for (let i = 3; i * i <= num; i += 2) {
        if (num % i === 0) return false;
    }
    return true;
} let a = [];
let n = +prompt("Nhập số lượng phần tử");
for (let i = 0; i < n; ++i) {
    let value = prompt(`Nhập phần tứ thứ ${i + 1}`);
    if (value === "") {
        value = NaN;
    }
    else
        value = Number(value);
    a.push(value);
}
function check(a) {
    if (a.every((item) => isNaN(item))) {
        console.log(`Mảng không có phần tử`);
        return;
    }
    if (a.some((num) => !Number.isInteger(num))) {
        console.log("Dữ liệu không hợp lệ");
        return;
    }
    console.log(a.filter(num => isPrime(num)));
}
check(a);