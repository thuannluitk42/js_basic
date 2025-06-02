/**
 * Kieu so (Number) trong javascript
 * 
 * 1. Tao gia tri Number
 * - Cac cach tao
 * - Dung cach nao ? Tai sao ?
 * - Kiem tra data type
 * 
 * 2. Lam viec voi Number
 * - To String
 * - To fixed
 */

var age = 18;
var PI = 3.14

var otherNumber = new Number(9);
var rsStr = "Thuan"

// check ky tu nhap vao cua user có phải là số không ?
console.log(isNaN(otherNumber/rsStr));

// => Key word: javascript methods number

// conver number type to string type
console.log(age.toString());

// lam tron so
// >= 0.5 lam tron len 4.95 thanh 55
// console.log(PI.toFixed());