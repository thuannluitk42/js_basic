/**
 * giới thiệu 1 số hàm built-in
 * 1. alert
 * 2. console
 * 3. confirm
 * 4. prompt
 * 5. set timeout
 * 6. set interval
 */
// Hàm built-in là những hàm có sẵn của js
console.log("Hello, king of rider");
console.log(123);
var fullName = "King of rider"
console.log(fullName);

// hien hop thoai yes no
confirm('Xac nhan ban du tuoi');

// hien hop thoai yes - no va o input
prompt('Xac nhan ban du tuoi');

// chay 1 doan code sau 1 khoan thoi gian va chi chay 1 lan
setTimeout(function()  {
alert('Henshin')
}, 1000)

// chay 1 doan code sau 1 khoan thoi gian va lap di lap lai
setInterval(function()  {
    console.log('');
    }, 1000)