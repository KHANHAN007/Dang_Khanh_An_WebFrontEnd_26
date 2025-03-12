let a = [];
for (let i = 0; i < 10; ++i) {
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
  console.log(`max = ${Math.max(...a)}\npositon = ${a.indexOf(Math.max(...a))}`);
}
check(a);
