let str = ["apple", "banana", "cat", "elephant", "dog"];
let str1 = [];
let str2 = "abc";
function check(str) {
  if (!Array.isArray(str)) {
    console.log("Dữ liệu không hợp lệ");
    return;
  }
  if (str.length === 0) {
    console.log("Mảng không chứa phần tử nào");
    return;
  }
    let result = str.filter(index => index.length > 5);
  console.log(result.join(" "));
}
check(str);
check(str1);
check(str2);