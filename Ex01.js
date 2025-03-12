let a = [];
for (let i = 0; i < 10; ++i){
  a.push(+prompt(`Nhập phần tử thứ ${i + 1}`));
}
findNum(a);
function findNum(a) {
  if (a.length === 0) {
    console.log("Mảng không có phần tử nào");
    return;
  }
  if (!a.every((num) => Number.isInteger(num))) {
    console.log("Mảng chứa phần tử không hợp lệ");
    return;
  }
  let result = a.filter((num) => num >= 10);
  console.log(result.length > 0 ? result.join(" ") : "Không có số nào ≥ 10");
}
