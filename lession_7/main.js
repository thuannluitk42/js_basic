/**
 * Chuỗi trong javascript
 * 1. Tạo chuỗi
 * - Các cách tạo chuỗi
 * - Nên dùng cách nào? Lý do?
 * - Kiểm tra data type
 * 2. Một số case sử dụng backslash (\)
 * 3. Xem độ dài chuỗi
 * 4. Chú ý độ dài khi viết code
 * 5. Template string ES6
 */

// Tạo chuỗi
//c1:
var fullName = "Thuan Le";
//c2:
var fName = new String("Thuan Le");

var fName2 = 'My name is 'Kamen Rider'';
console.log(fName2);

var fName3 = 'His name is \'Kamen Rider\'';
console.log(fName3);

console.log(fName3.length);

// template string
console.log(`Toi la: ${fName2} ${fName3}`);

// Lam viec voi chuoi
var myStr = "Hoc JS with Thuan Le";

// Keyword: JS string methods

// 1. Length
// console.log(myStr.length);

// 2. Find index
// console.log(myStr.indexOf('JS'));

// 3. Cut string
// console.log(myStr.slice(4));

// 4. Replace
// console.log(myStr.replace('JS','Javascript'));
// dung bieu thuc chinh quy
// console.log(myStr.replace(/JS/g,'Javascript'));

// 5.Convert to upper case
// console.log(myStr.toUpperCase());

// 6.Convert to lower case
// console.log(myStr.toLowerCase());

// 7.Trim
// console.log(myStr.trim());

// 8.Split()
// var languages = "Javascript, PHP, Ruby";
// console.log(languages.split(', '));

// 9. Get a character by index
// var myName = "Thuan Le";
// console.log(myName.charAt(L));


