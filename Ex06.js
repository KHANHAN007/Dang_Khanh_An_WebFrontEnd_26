function formatdate(a) {
  if (!Array.isArray(a)) {
    console.log("Dữ liệu không hợp lệ");
    return;
  }
  if (a.length === 0) {
    console.log("Mảng không có phần tử");
    return;
  }
  let format = /^\d{4}-\d{2}-\d{2}$/;
  if (a.some((date) => !format.test(date))) {
    console.log("Dữ liệu không hợp lệ");
    return;
  }
  console.log(
    a.map((date) => {
      let [year, month, day] = date.split("-");
      return `${day}/${month}/${year}`;
    })
  );

}
formatdate(["2025-03-10", "2024-12-25", "2023-07-01"]);
formatdate([]);
formatdate("");