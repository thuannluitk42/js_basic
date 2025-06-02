// JSON
// Là 1 định dạng dữ liệu chuỗi (chuỗi)
// Javascript Object Notation
// JSON: Number, Boolean, Null, Array, Object
// Mã hóa / giải mã
// encode / decode
// Stringify: tu javascript type -> json
//  parse: tu json -> javascript type

var json = 'false';
var json2 = 'null';
var jsonArray = '["Javascript","PHP"]';
var jsonObject = '{"name":"Thuan Le", "age":28}';

var a = '1';
console.log(JSON.parse(a));

console.log(JSON.parse(jsonArray));

var object = JSON.parse(jsonObject);
console.log(object);

console.log(JSON.stringify(1));
console.log(JSON.stringify([
    'java',
    'php'
]));
console.log(JSON.stringify({
    name: "Chu Nguyen Chuong",
    age: 19
}));