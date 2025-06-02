// 1. DOM event /Event listener
// 2. JSON
// 3. Fetch
// 4. DOM location
// 5. Local storage
// 6. Session storage
// 7. Coding convention
// 8. Best practice
// 9. Mistakes
// 10. Performance

// 1. Xử lý nhiều việc khi 1 event xảy ra
// 2. Lắng nghe / Hủy bỏ lắng nghe

var btn = document.getElementById('btn');

//===================================== su dung dom event de lam nhieu viec
btn.onclick = function(){
    // viec 1
    console.log('Viec 1');
    // viec 2
    console.log('Viec 2');
    // viec 3
    console.log('Viec 3');
}

// lang nghe su kien
setTimeout (function () {
    btn.onclick = function(){
    // viec 1
    console.log('Viec 1');
    // viec 2
    console.log('Viec 2');
    // viec 3
    console.log('Viec 3');
    }
}, 100n);

// huy bo lang nghe su kien

setTimeout(function () {
    btn.onclick = function () {}
}, 3000);

//===================================== su dung event listenner de lam nhieu viec

function viec1() {
console.log('viec 1');
}

function viec2() {
console.log('viec 2');
}

btn.addEventListener('click', viec1);
btn.addEventListener('click', viec2);

//huy bo lang nghe
setTimeout (function () {
    btn.removeEventListener('click', viec2);
}, 3000);