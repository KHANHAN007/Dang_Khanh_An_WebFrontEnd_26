function check(a) {
    if (!Array.isArray(a)) {
        console.log("Dữ liệu không hợp lệ");
        return;
    }
    if (a.length === 0) {
        console.log("Mảng không có phần tử");
        return;
    }
    a = a.filter(num => num % 2 === 0);
    console.log(a.map(num => num * num));
}
check([2, 5, 10]);
check([]);
check("abc");