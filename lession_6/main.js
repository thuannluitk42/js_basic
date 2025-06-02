/**
 * Kiểu dữ liệu trong JS
 1. Dữ liệu nguyên thủy - Primitive Data
 - number
 - string
 - boolean
 - undefined
 - null
 - symbol
 2. Dữ liệu phức tạp - Complex Data
 - Function
 - Object 
 **/ 

 // Number type
 var a = 1;
 var b = 2;
 var c = 1.5;

 console.log(typeof a);

 // String type
 var fullName = 'Thuan Le';

 // Boolean
 var isSuccess = true;

 // undefined
 // Tạo biến nhưng chưa gán giá trị
 // 1 hàm nhưng không trả về giá trị
 // truy cập 1 thuộc tính không tồn tại
 // truyền thiếu tham số vào hàm
 // => undefined khác null, null là lập trình cố ý gán còn thằng này nó vô tình ko giá trị
 var isMe 

 // null
 var isNull = null; // nothing

 // symbol
 // tạo giá trị duy nhất không thể trùng lặp
 // => tạo key ẩn trong object - tránh bị ghi đè hoặc lộ ra ngoài
 const id = Symbol("id");

const user = {
  name: "Thuận",
  [id]: 12345, // dùng symbol làm key
};

console.log(user);         // 👉 { name: 'Thuận', [Symbol(id)]: 12345 }
console.log(user[id]);     // 👉 12345
console.log(user["id"]);   // 👉 undefined (vì key là symbol, không phải string)

// Function
var myFunction = function(){
    alert("Hi. Xin chào các bạn!");
}

myFunction();

// Object 
var myObject = {
    name: "Thuan Le",
    age: 28,
    myFunction: function () {
        console.log('Xin chao the gioi');
    }
};
console.log('my object', myObject);

var myArray = [
    1,2,3,4,5
];
console.log(myArray);