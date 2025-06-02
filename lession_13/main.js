// Callback?
// Là hàm được truyền qua đối số khi gọi hàm khác

// 1. Là hàm
// 2. Được truyền qua đối số
// => truyền hàm làm tham số.

// function myFunction(param) {
//     console.log(typeof param);
// }

// function myCallback() {
// }

// myFunction(12);

function chaoBan(ten) {
  console.log("Xin chào, " + ten);
}

function goiLaiSauKhiXong(param) {
  const ten = "Thuận";
  param(ten); // gọi lại hàm được truyền vào param = function chaoBan
}

goiLaiSauKhiXong(chaoBan);
