/**
 * Mảng trong js - Array
 * 1. Tạo mảng
 * - Cách tạo
 * - Sử dụng cách nào ? Tại sao ?
 * - Kiểm tra data type
 * 2. Truy xuất mảng
 * - Độ dài mảng
 * - Lấy phần tử theo index
 * 3. Làm việc với array
 * - To String
 * - Join
 * - Pop
 * - Push
 * - Shift
 * - Unshift
 * - Splicing
 * - Concat
 * - Slicing
 */

//  c1
var languagues = [
    "Java",
    "Javascript",
    "PHP",
    null,
    undefined,
    function(){

    }, 
    {},
    123
];
// console.log(languagues);
// c2
var languagues2 = new Array (
    "Java",
    "Javascript",
    "PHP",
    null,
    undefined,
    function(){

    }, 
    {},
    123
)

// console.log(languagues2);
// console.log(languagues2.length);
// console.log(languagues2[1]);

// {} đây là 1 object
// console.log(typeof languagues2);

// kiểm tra 1 biến có phải aray không thì dùng hàm dưới
// console.log(Array.isArray(languagues2));

var characters = [
    'a',
    'b',
    'c'
];

// chuyển dữ liệu array thành string
console.log(characters.toString());

// cộng thêm ký tự gì đó vào sau mỗi phần tử
// console.log(characters.join(', '));

// pop xóa và trả về phần tử cuối mảng
// console.log(characters.pop());

// push thêm 1 hoặc nhiều phần tử vào cuối mảng
// console.log(characters.push("d","e"));

// shift xóa đi 1 phần tử đầu mảng và trả về phần tử đầu mảng
// console.log(characters.shift());


// unshift giống push, thêm 1 hoặc nhiều phần tử vào đầu mảng, trả về độ dài mảng
// console.log(characters.unshift("L", "V"));

// splicing xóa, cắt, chèn phần tử mới vào mảng
characters.splice(1, 1) // xóa từ phần tử chỉ định bao nhiêu phần tử
characters.splice(1, 0, "K") // chèn thêm 1 phần tử
characters.splice(1, 1, "j") // thay thế phần tử

// concat nối array lại với nhau
var characters2 = [
    'w',
    'x',
    'y'
];
// console.log(characters.concat(characters2));

// slice cắt 1 vài phần tử của mảng
// console.log(characters.slice(1));

// console.log(characters);

var courses = 
[
    {
        id: 1,
        name: 'Java',
        score : 5
    },
    {
        id: 2,
        name: 'JS',
        score : 1
    },
    {
        id: 3,
        name: 'C#',
        score : 4
    },
    {
        id: 4,
        name: 'Python',
        score : 2
    },
    {
        id: 5,
        name: 'Ruby',
        score : 2
    },
    {
        id: 6,
        name: 'Java',
        score : 5
    },
]

courses.forEach(function (index, course) {
    console.log(index, course);
});

// every giúp kiểm tra tất cả các phần tử trong mảng phải thỏa mãn điều kiện nào đó
// chỉ cần 1 thằng sai điều kiện là nó dừng tại thằng đó luôn
var isZero = courses.every(function (index, course) {
    return course.score === 0;
});

// some: chỉ cần 1 thằng đúng là dừng vòng lặp
var higherThan = courses.some(function (index, course) {
    return course.score > 2;
});

// find: tìm và trả về phần tử, ko có thì trả về null hoặc undefined
var isJava = courses.some(function (index, course) {
    return course.name === "Java";
});

// filter: trả về tất cả các phần tử thỏa mãn điều kiện
var listCourse = courses.filter(function (index, course) {
    return course.name === "Java";
});

// map: duyệt lần lượt từng phần tử, trong lúc duyệt sẽ ném phần tử đó vào function con để xử lý logic, và nó sẽ nhét vào cái mảng kết quả
function courseHandlers (course, index) {
 return {
    id: course.id,
    name: `Khoa hoc: ${course.name}`,
    score: course.score,
    scoreText: `Diem tach: ${course.score}`,
    index: index,
    oldArr: course
 }
};

 var newCourses = courses.map(courseHandlers);

 //=> ví dụ thực tế dùng map để tạo view html
 function courseHandlers (course, index) {
    return `<h2>${course.name}</h2>`;
 };
//  console.log(newCourses.join(''));

 // hàm reduce: các phần tử của mảng thành một giá trị duy nhất
 const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
// console.log(count);
// => { apple: 3, banana: 2, orange: 1 }

//Tính bình phương các số
// const numbers = [1, 2, 3, 4, 5];
// const squares = numbers.map(n => n * n);
// console.log(squares); 
// => [1, 4, 9, 16, 25]

//Tính tổng các số
// const numbers = [1, 2, 3, 4, 5];
// const total = numbers.reduce((acc, curr) => acc + curr, 0);
// console.log(total); 
// => 15

// Ví dụ: Tính tổng bình phương các số trong mảng.
// const numbers = [1, 2, 3, 4];

// const sumOfSquares = numbers
//   .map(n => n * n)       // [1, 4, 9, 16]
//   .reduce((a, b) => a + b, 0);  // 1 + 4 + 9 + 16 = 30

// console.log(sumOfSquares); 
// => 30

// Trích tên học sinh từ danh sách
// const students = [
//   { name: "Thuận", age: 26 },
//   { name: "Linh", age: 24 },
//   { name: "Huy", age: 27 }
// ];
// const names = students.map(student => student.name);
// console.log(names);

//Tính tổng tiền trong giỏ hàng
// const cart = [
//   { product: "Laptop", price: 1000, quantity: 1 },
//   { product: "Mouse", price: 50, quantity: 2 },
//   { product: "Keyboard", price: 80, quantity: 1 }
// ];
// const total = cart.reduce((acc, item) => {
//   return acc + item.price * item.quantity;
// }, 0);
// console.log(total);

//Nhóm học sinh theo tuổi bằng reduce()
// const students2 = [
//   { name: "Thuận", age: 26 },
//   { name: "Linh", age: 24 },
//   { name: "Huy", age: 26 }
// ];
// const groupedByAge = students2.reduce((acc, student) => {
//   const age = student.age;
//   acc[age] = acc[age] || [];
//   acc[age].push(student);
//   return acc;
// }, {});

// console.log(groupedByAge);
/*
{
  24: [{ name: "Linh", age: 24 }],
  26: [
    { name: "Thuận", age: 26 },
    { name: "Huy", age: 26 }
  ]
}
*/

// Tính tổng số tiền các sản phẩm có giá > 100
// const products = [
//   { name: "Laptop", price: 1200 },
//   { name: "Mouse", price: 50 },
//   { name: "Keyboard", price: 150 },
//   { name: "Monitor", price: 300 },
//   { name: "USB", price: 30 }
// ];
// const total = products
//   .filter(p => p.price > 100)       // Chỉ lấy các sản phẩm đắt
//   .map(p => p.price)                // Lấy giá
//   .reduce((sum, price) => sum + price, 0); // Cộng tổng

// console.log(total); 
// // => 1200 + 150 + 300 = 1650

//Lấy danh sách tên người dùng đang hoạt động
// const users = [
//   { id: 1, name: "Thuận", isActive: true },
//   { id: 2, name: "Linh", isActive: false },
//   { id: 3, name: "Huy", isActive: true }
// ];
// const activeUserNames = users
//   .filter(user => user.isActive)
//   .map(user => user.name);

// console.log(activeUserNames); 
// => ["Thuận", "Huy"]

// Lọc các sản phẩm giá > 100
// Tính tổng tiền
// Render ra HTML hiển thị danh sách và tổng
/** 
<body>
    <div id="product-list"></div>
    <div id="total-price"></div>

    <script>
        // JavaScript code ở dưới đây
    </script>
</body>
const products = [
  { name: "Laptop", price: 1200 },
  { name: "Mouse", price: 50 },
  { name: "Keyboard", price: 150 },
  { name: "Monitor", price: 300 },
  { name: "USB", price: 30 }
];

const filteredProducts = products.filter(p => p.price > 100);

const productHTML = filteredProducts
  .map(p => `<li>${p.name} - $${p.price}</li>`)
  .join('');

const total = filteredProducts
  .reduce((sum, p) => sum + p.price, 0);

document.getElementById('product-list').innerHTML = `
  <h3>Sản phẩm có giá > 100</h3>
  <ul>${productHTML}</ul>
`;

document.getElementById('total-price').innerHTML = `
  <strong>Tổng tiền: $${total}</strong>
`;
*/

// Kiểm tra người dùng có quyền truy cập
// const roles = ['admin', 'editor'];
// const currentRole = 'editor';

// if (roles.includes(currentRole)) {
//   console.log('Access granted');
// }

// Kiểm tra từ khóa có trong chuỗi tìm kiếm
// const title = "Học lập trình JavaScript cơ bản";

// if (title.toLowerCase().includes("javascript")) {
//   console.log("Kết quả liên quan đến JavaScript");
// }

// Kiểm tra sản phẩm đã có trong giỏ hàng chưa
// const cart = ['Laptop', 'Mouse', 'Keyboard'];

// if (cart.includes('Mouse')) {
//   console.log('Sản phẩm đã có trong giỏ');
// }

// Kiểm tra giá trị đầu vào có hợp lệ không
// const allowedColors = ['red', 'blue', 'green'];
// const userColor = 'purple';

// if (!allowedColors.includes(userColor)) {
//   console.log('Màu không hợp lệ');
// }

// Lọc mảng theo điều kiện “thuộc nhóm nào đó”
// const statusList = ['active', 'pending', 'inactive'];
// const users = [
//   { name: 'A', status: 'active' },
//   { name: 'B', status: 'banned' },
//   { name: 'C', status: 'pending' },
// ];

// const filtered = users.filter(u => statusList.includes(u.status));

// console.log(filtered);
// => chỉ còn A và C

// Kiểm tra xem một người dùng có trong danh sách cấm hay không
// const bannedUsers = [
//   { id: 1, name: 'Huy' },
//   { id: 2, name: 'Linh' }
// ];
// const user = { id: 2, name: 'Linh' };
// const isBanned = bannedUsers.some(u => u.id === user.id);
// console.log(isBanned); // true

// Danh sách sản phẩm và bộ lọc từ người dùng
// const products = [
//   { name: 'Laptop' },
//   { name: 'Mouse' },
//   { name: 'Keyboard' },
//   { name: 'USB' }
// ];
// <input type="text" id="search" placeholder="Tìm sản phẩm..." />
// <ul id="result"></ul>

// <script>
//   const products = [
//     { name: 'Laptop' },
//     { name: 'Mouse' },
//     { name: 'Keyboard' },
//     { name: 'USB' }
//   ];

//   const searchInput = document.getElementById('search');
//   const result = document.getElementById('result');

//   searchInput.addEventListener('input', () => {
//     const keyword = searchInput.value.toLowerCase();

//     const filtered = products.filter(p =>
//       p.name.toLowerCase().includes(keyword)
//     );

//     result.innerHTML = filtered
//       .map(p => `<li>${p.name}</li>`)
//       .join('');
//   });
// </script>