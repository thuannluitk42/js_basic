// Promise
// sync: dong bo
// async: bat dong bo

// Cac phuong thuc bat dong bo: setTimeout, setInterval, fetch, XMLHttpRequest, file reading,
// request animation frame
// Callback: de xu ly cac phuong thuc bat dong bo 

// sleep
// setTimeout(() => {
//     console.log(1);
// }, 1000);

// console.log(2);

// Muon tao 1 promise thi phai tra qua cac buoc sau:
// 1. new Promise
// 2. Executor
// 3. trang thai: promise se co 3 trang thai

// 1. Pending: khong xac dinh thanh cong/that bai chuong trinh chay mai memory leak
// 2. Fulfilled: thanh cong
// 3. Rejected: tht bai

var promise = new Promise(
    // Executor
    function(resolve, reject) {
    // logic
    // thanh cong call resolve()
    // that bai call reject()
        resolve ([
            {
                id:1,
                name: 'java'
            }
        ]);
    }
);

// cau truc code promise
promise
        .then(function (cousres) { // call resole
            console.log("Thanh cong");
        })
        .then(function (data) { // call resole
            console.log(data);
            return 2;
        })
        .then(function (data) { // call resole
            console.log(data);
            return 3;
        })
        .catch(function (error) { // call reject
            console.log(error);
        })
        .finally (function () {
            console.log("Done");
        });

/**
 * Promise là gì?
                Là một khái niệm trong JavaScript, xuất hiện từ ES6, để xử lý các tác vụ bất đồng bộ (như gọi API, đọc file…).
                Trước khi có Promise, thường dùng callback, dễ dẫn đến “callback hell” (mã lồng nhau, khó đọc, khó bảo trì).
                Promise giúp viết code dễ hiểu, gọn gàng hơn.
    Cách tạo Promise:
                Dùng new Promise(executorFunction).
                executorFunction có 2 tham số: resolve (xử lý thành công) và reject (xử lý thất bại).
                Khi chạy thành công, gọi resolve(), thất bại thì gọi reject().
    Cách sử dụng Promise:
                Dùng .then(callback) để xử lý thành công (nếu gọi resolve).
                Dùng .catch(callback) để xử lý thất bại (nếu gọi reject).
 */

// Chain: tính chất chuỗi, nhiều hàm then liên tiếp nhau, kết quả của function đằng trước là tham số của function đằng sau

// trường hợp xuất hiện lỗi trong then() giữa chừng thì reject trong then đó sẽ bắt lại và ném ra cho catch lớn nhất để show lỗi

// 1. Promise.resolve
// 2. Promise. reject
// 3. Promise.all

var promiseTest = new Promise(
    function (resolve, reject) {
        resolve("thanh cong");
    }
);

// auto win
var promiseTest2 = Promise.resolve('ThanhCong!');
// auto failed
var promiseTest3 = Promise.reject('ThatBai!');

promiseTest
        .then(function (rs) {
            console.log("result: ", rs);
        })
        .catch(function (err) {
            console.log("err: ", err);
        });


var promise1 = new Promise (
    function(resole) {
        setTimeout(function() {
            resolve([1]);
        }, 2000);
    } 
);

var promise2 = new Promise (
    function(resole) {
        setTimeout(function() {
            resolve([2,3]);
        }, 5000);
    } 
);

Promise.all([promise1, promise2])
        .then(function(result) {
            var rs1 = result[0];
            var rs2 = result[1];

            console.log(rs1.concat(rs2));
        });

Promise.all([promise1, promise2])
        .then(function([rs1, rs2]) {
            console.log(rs1.concat(rs2));
        });


/**
 * fetch là một API gốc (native API) dùng để gửi yêu cầu HTTP (GET, POST, PUT, DELETE, ...) 
 * và lấy dữ liệu từ một URL.
 * fetch trả về một Promise, nên thường dùng .then() hoặc async/await.
   fetch không tự động trả lỗi cho HTTP status code
 */

fetch(url, options)
  .then(response => response.json()) // Hoặc .text(), .blob(), v.v.
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Ví dụ GET
fetch('https://api.example.com/data')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));

// Ví dụ POST
fetch('https://api.example.com/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ name: 'Thuận', age: 27 })
})
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));

// Ví dụ với async/await
async function getData() {
  try {
    const res = await fetch('https://api.example.com/data');
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}


