// 1. Let, const
// 2. Template Literals
// 3. Multi-line String
// 4. Arrow function
// 5. Classes
// 6. Default parameter values
// 7. Destructuring
// 8. Rest parameters
// 9. Spread
// 10. Enhanced object literals
// 11. Tagged template literals
// 12. Modules: Import/ Export
// 13. Optional chaining(?)

/**
    1. Var / Let, Const: scope, hosting
    2. Const / Let, Var: assignment
    Điểm giống nhau
    var, let, const đều dùng để khai báo biến
    Điểm khác nhau
    phạm vi truy cập khác nhau: var truy cập được cả bên ngoài lẫn bên trong còn const và let thì không
    var hỗ trợ hosting còn let và const thì không
    giá trị của let và var thì đổi được còn const thì không
 */

/**
 * Arrow function: bỏ chữ function thêm dấu => sau cái ngoặc tròn của parameter
 * 
 */
const sum = (a,b) => {
    return a + b;
}
const sum2 = (a,b) => a + b;

const sum3 = (a,b) => {
    return {
        a: a,
        b: b
    };
};

// return object
const sum4 = (a,b) => ({a: a, b: b});

console.log(sum(2,1));

const course = {
    name: 'Javascript basic!',
    getName: () => {
        return this.name;
    }
};

console.log(course.getName());

/**
 * Template literals (Template string)
 */

const courseName = "JAVA";
const courseName2 = "PHP";
const description = `Course name: ${courseName} - ${courseName2}`;
const description2 = `Template string noi suy voi: \${}`;

/**
 * Multi-line string
 */
const lines = `Line 1
Line 2
Line 3`;
console.log(lines);

/**
 * Classes
 */

// function Course3 (name, price) {
//     this.name = name;
//     this.price = price;
// }

class Course3 {
    constructor (name, price) {
    this.name = name;
    this.price = price;
    this.getName = function () {
        return this.name;
    }
}
}

const phpCourse = new Course3("PHP", 1000);
const javaCourse = new Course3("Java", 2000);

/**
 * Enhanced object literals
 * 1. Định nghĩa key: value cho object
 * 2. Định nghĩa method cho objet
 * 3. Định nghĩa key cho object dưới dạng biến
 */

// var name3 = "js3";
// var price3 = 1000;
// var course99 = {
//     name3,
//     price3,
//     getName: function() {
//         return name3;
//     }
// };

// var fieldName = 'name';
// var fieldPrice = 'price';

// const course99 = {
//     [fieldName] : 'javascript',
//     [fieldPrice] : 9999
// }
// console.log(course99);


/**
 * Default parameter values
 */

function logger (log = 'gia tri mac dinh!', type='log') {
    console[type](log);
}
logger('message...');

/**
 * Destructuring: phân rã, dùng cho object và arrays
 */

var array = ['javascript', 'php','ruby'];

var a = array[0];
var b = array[1];
var c = array[2];

console.log(a,b,c)

// dung Destructuring
var [a,b,c] = array;

/**
 * rest parameters: lấy ra phần còn lại. 
 * như ví dụ dưới đang dùng thử biến rest để đại diện những đứa còn lại.
 * toán tử rest được gọi là toán tử còn lại khi nó đi cùng destructuring.
 */

var array2 = ['javascript', 'php','ruby'];
var [a, ...rest] = array2;

console.log(a);
console.log(rest);

/**
 * spread (toán tử giải): giúp mở rộng hoặc trích xuất các phần tử của một mảng
 * Sao chép mảng/đối tượng (shallow copy).
   Kết hợp (merge) mảng/đối tượng.
   Truyền phần tử của mảng làm đối số cho một hàm.
 */

// Kết hợp mảng:
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [...arr1, ...arr2]; // [1, 2, 3, 4]

// Sao chép mảng:
const arr = [1, 2, 3];
const copy = [...arr]; // copy = [1, 2, 3]

// Truyền đối số:
const nums = [1, 2, 3];
console.log(Math.max(...nums)); // 3

// Với đối tượng:
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const merged = { ...obj1, ...obj2 }; // { a: 1, b: 3, c: 4 }

//Toán tử spread chỉ sao chép nông (shallow copy), không phải sao chép sâu (deep copy).
//Đối với object, thuộc tính trùng tên ở bên phải sẽ ghi đè lên bên trái.

/**
 * Tagged template literals
 * Cú pháp tổng quát:
 * tagFunction`Chuỗi có thể có ${biến1} và ${biến2}`;
 * Tại sao cần Tagged Template Literals?
 * Tùy biến chuỗi động phức tạp hơn (ví dụ: format HTML, highlight từ khóa, xử lý dịch thuật...). 
 * Tạo CSS-in-JS (ví dụ: styled-components dùng rất nhiều).
 * Bảo mật (như sanitize input để chống XSS).
 */

function highlight (...rest) {
    console.log(rest);
}
var brand = 'ThuanCTO';
var course101 = 'Javascript';
highlight`Học lập trình ${course101} tại ${brand}`;

// function highlight(strings, ...values) {
//   return strings.reduce((result, str, i) => {
//     const val = values[i] ? `<span>${values[i]}</span>` : "";
//     return result + str + val;
//   }, "");
// }

// const name = "Thuận";
// const age = 27;

// const message = highlight`Xin chào ${name}, bạn ${age} tuổi!`;

// console.log(message);
// Output: Xin chào <span>Thuận</span>, bạn <span>27</span> tuổi!


/**
 * Modules: Import/ Export
 */
import logger from "./logger.js";
import {
        TYPE_LOG,
        TYPE_WARN,
        TYPE_ERROR
} from './constant.js';
// hoac dung 
// import * as constants from './constant.js';

console.log(typeof logger);
logger('test message....',TYPE_WARN);


/**
 * Optional Chaining trong JavaScript (ký hiệu: ?.)
   giúp code không gặp undefined hoặc null khi truy cập 1 thuộc tính
   mà không biết nó có tồn tại hay không
 */

//Giả sử có object:
const user = {
  name: "Thuận"
};

// Truy cập user.address.city
console.log(user.address.city); // ❌ Lỗi: Cannot read property 'city' of undefined
// Optional Chaining giúp gì?
console.log(user.address?.city); // ✅ undefined (không lỗi)

const user2 = {
  name: "Thuận",
  address: null
};

console.log(user2.address?.city); // undefined

// Gọi hàm an toàn
const obj = {
  sayHello() {
    console.log("Hello!");
  }
};

obj.sayHello?.(); // Hello!
obj.notExist?.(); // không làm gì cả (không lỗi)