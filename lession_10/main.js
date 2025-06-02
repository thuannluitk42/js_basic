/**
 * Hàm (fucntion) trong javascript
 * 1. Hàm?
 * - một khối block
 * - làm 1 việc cụ thể
 * 2. Loại hàm
 * - Built-in
 * - Tự định nghĩa
 * 3. Tính chất
 * - Không thực thi khi định nghĩa
 * - Sẽ thực thi khi được gọi
 * - Có thể nhận thêm tham số
 * - Có thể trả về 1 giá trị
 * 4. Tạo hàm đầu tiên
 * 5. Parameter trong ham
 * a) Tham số
 * - định nghĩa
 * - kiểu dữ liệu
 * - tính private
 * - 1 tham số
 * - nhiều tham số
 * b) Truyền tham số
 * - 1 tham số
 * - nhiều tham số
 * c) Arguments?
 * - Đối tượng argument
 * - giới thiệu vòng for
 * 6. Return trong hàm - js cơ bản
 * 7. Các loại function
 * a) Declaration function
 * b) Expression function
 * c) Arrow function
 */

function showDialog() {
    alert("Hi, bro. Try hard nao")
}

function showDialog(message) {
    console.log((message));
}

function showDialog(message, message2) {
    console.log((message));
    console.log((message2));
}

// toan tu call ()
// showDialog();

// showDialog("wtf, bro");

// showDialog(["A","B"]);

// showDialog("Tua", null);

// đối tượng chỉ xuất hiện trong 1 function => argument
// tính chất giống mảng
function henshin() {
    console.log(arguments);
}

// henshin("T1","T2");

// var isConfirm = confirm("Message?");
// console.log(isConfirm);

function tru(a1, a2){
    a1 - a2;
    console.log('123');
    alert()
}

// var rs = tru(10, 2);
// console.log(rs);

function callMeByMySelf(){
    function callMeByMySelf2(){
        console.log(" cang a nha");
    }
}

// callMeByMySelf2();
// callMeByMySelf();

// a) Declaration function: có chữ function 
function abc() {

}
// b) Expression function: có tên biến trước function
var showMessages = function testName() {

}
setTimeout(function testName() {

});
// c) Arrow function

var myObject = {
    myFunction: function testName(){

    }
}

// hosting: function declaration được gọi trước khi được định nghĩa, gọi trước viết logic sau điểm khác so với Expression function