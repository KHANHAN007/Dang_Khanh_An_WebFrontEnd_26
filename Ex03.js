let email = [
  "john.doe@gmail.com",
  "invalidemail.com",
  "hello@domain.net",
  "space@out.com",
];
let email1 = [];
let email2 = "abc";
function filterValidEmails(emails) {
    if (!Array.isArray(emails)) {
        console.log("Dữ liệu không hợp lệ");
        return;
    }
    if (emails.length === 0) {
        console.log("Mảng không có phần tử");
        return;
    }
  console.log(emails.filter((email) => email.includes("@") && !email.includes(" ")));
}
filterValidEmails(email);
filterValidEmails(email1);
filterValidEmails(email2);