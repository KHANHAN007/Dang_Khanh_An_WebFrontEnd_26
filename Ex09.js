let n = +prompt("Nhập số lượng phần tử");
let a = [];
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
    if (a.length === 0 || a.every((item) => isNaN(item))) {
        console.log("Mảng không có phần tử hợp lệ.");
        return;
    }
    if (a.some((num) => !Number.isInteger(num))) {
        console.log("Dữ liệu không hợp lệ");
        return;
    }
    console.log("totalEven = " + a.filter(num => num % 2 === 0).reduce((acc, cur) => acc + cur, 0));
    console.log("totalOdd = " + a.filter(num => num % 2 !== 0).reduce((acc, cur) => acc + cur, 0));
}
check(a);