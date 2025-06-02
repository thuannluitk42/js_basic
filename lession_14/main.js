// HTML DOM

/**
    1. element (tag): ID, class, tag, css selector, HTML collection
    2. attribute thuộc tính trong tag
    3. text
 */
var headingNode = document.getElementById("headingNode");
var headNodes = document.getElementsByClassName("headNodes");
var headNodes2 = document.getElementsByTagName("h1");
var pValue = document.getElementsByTagName("p");
var pValue2 = document.querySelector(".hope");
var pValue3 = document.querySelector("html .box .box-wish");
// lay ra box-wish dau tien
var pValue4 = document.querySelector(".box .box-wish:first-child");
// lay ra box-wish thu 2
var pValue5 = document.querySelector(".box .box-wish:nth-child(2)");

console.log(document.forms['form-1']);
console.log(document.forms.baseForm);

var boxNode = document.querySelector('.box-1');
// cong viec 1: su dung toi `boxNode`
console.log(boxNode);
// cong viec 2: su dung toi cac li elements la con cua `.box-1`
console.log(boxNode.querySelectorAll('li'));
console.log(boxNode.getElementsByTagName('p'));
console.log(boxNode.querySelector('p'));

console.log(pValue);


// DOM attribute
var headingElement = document.querySelector('p');
headingElement.title = "Heading";
headingElement.className = "Heading";
headingElement.setAttribute('class','heading');
headingElement.setAttribute('dosat','oneKill');
headingElement.getAttribute('dosat');


//1. Element
//2. Attribute
//3. Text

// innerText: chỉ trả về nội dung => màn hình web hiển thị sao thì nó in ra như vậy
// textContent:  trả về nội dung (text, code, css) nó in sạch
var hd1Element = document.getElementsByClassName("hd-1");
console.log(hd1Element.innerText);
console.log(hd1Element.textContent);

//innerHTML: Lấy nội dung HTML bên trong một phần tử + Thay đổi nội dung HTML bên trong một phần tử, thêm 1 nội dung vào element khác
//outerHTML: nó lấy hoặc thay đổi toàn bộ phần tử HTML, bao gồm chính thẻ chứa nó chứ không chỉ phần nội dung bên trong.

var boxElement = document.querySelector('.box-2');
boxElement.innerHTML = '<h1 title="Heading">New heading</h1>';
boxElement.outerHTML = '<h1 title="Heading">Outer HTML</h1>';

// console.log(boxElement.innerHTML);
// console.log(document.querySelector('h1').innerText);


// DOM style
//c1
var boxElement = document.querySelector('.box');
boxElement.style.width = '100px';
boxElement.style.height = '200px';
boxElement.style.backgroundColor = 'red';
//c2
Object.assign(boxElement.style, {
    width: '200px',
    height: '300px',
    backgroundColor : 'green',
});

console.log(boxElement.style.backgroundColor);

// ClassList property
// chỉ lấy được thuộc tính này khi lấy được element node

// add
// contains
// remove
// toggle

var boxElement = document.querySelector('.box');
// trả về DOMTokenList, kiểu mảng, mỗi 1 tên class là 1 phần tử trong mảng
console.log(boxElement.classList);

console.log(boxElement.classList.length);
console.log(boxElement.classList.value);

// boxElement.classList.add("red");
// setTimeout(() => {
//     boxElement.classList.remove("red");
// }, 3000);

// nếu có thì bỏ, nếu ko có thì thêm => toggle
setTimeout(() => {
    boxElement.classList.toggle("red");
}, 3000);

// console.log(boxElement.classList.contains('red'));

// DOM event
// Xử lý hành vi của người dùng
// 1. Attribute events
// 2. Assign event using the element node

/**
 * 1. Attribute events: gắn trực tiếp sự kiện vào các phần tử HTML
 */
var h4Element = document.getElementById("h4-id");
 h4Element.onclick = function () {
    console.log(h4Element);
}
// h4Element tuong tu h4Element1
var h4Element1 = document.getElementById("h4-id");
h4Element1.onclick = function (e) {
    console.log(e.target);
}

var hd1Elements = document.querySelectorAll('h1'); //=> NodeList h1

// for(var i = 0; i < hd1Elements.length; i++){
//     hd1Elements[i].onclick = function (e) {
//         console.log(e.target);
//     }
// }

// Input / select
// Key up / down

var inputElement = document.querySelector('input[type="text"]');
var inputValue;

// su kien an khi nguoi dung blur
inputElement.onchange = function(e) {
    inputValue = e.target.value;
}

var checkedElement = document.querySelector('input[type="checkbox"]');
checkedElement.onchange = function(e) {
    console.log(e.target.checked);
}

var selectElement = document.querySelector('select');
checkedElement.onchange = function(e) {
    console.log(e.target.value);
}

// su kien an khi nguoi dung go
inputElement.oninput = function(e) {
    inputValue = e.target.value;
}

var keyDownEvent = document.querySelector('input[type="text"]');
keyDownEvent.onkeydown = function(e) {
    console.log(e.target.value);
}

var keyUpEvent = document.querySelector('input[type="text"]');
keyUpEvent.onkeyup = function(e) {
    console.log(e.target.value);
}

// nhan xuong va giu phim
document.onkeypress = function(e) {
    console.log(e.target.value);
}

// loai bo hanh vi mac dinh cua trinh duyet tren 1 cai the: preventDefault
// loai bo su kien noi bot: stopPropagation

// lay ra tat ca cac the a
var aElement = document.querySelector('a');
var aElement2 = document.links;

for (var i = 0; i < aElement.length; i++) {
    aElement[i].onclick = function(e) {
        if(!e.target.href.startsWith("https://f8.edu.vn")) {
                e.preventDefault();
        }
    }
}

document.getElementById('div-main').onclick = function () {
    console.log('DIV');
}
document.querySelector('button').onclick = function (e) {
    e.stopPropagation();
    console.log('Click me!');
}
