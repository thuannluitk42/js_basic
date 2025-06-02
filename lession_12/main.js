// Object trong Js

var genderKey = 'gender';
var myInfo = {
    name:"Le Van Thuan",
    age: 28,
    address: "Nha Trang, Khanh Hoa",
    [genderKey]: 'Nam',
    getName: function(){
        return this.name;
    }
};
var myKey = 'age';

myInfo.email = "thuandevk42@gmail.com";
myInfo["skill"] = "trộm chó";

// console.log(myInfo.address);
// console.log(myInfo['skype']);
// console.log(myInfo['email']);
// console.log(myInfo[myKey]);

// xóa key
delete myInfo.address

console.log(myInfo);

// Object constructor
function User(fName, lName, avatar) {
    this.fName = fName;
    this.lName = lName;
    this.avatar = avatar;
    this.getName = function () {
        return `${this.fName} ${this.lName}`;
    }
}

var author = new User("Thuan", "Le", "Ohio");
var user = new User("Jugi", "Chan", "Ohio");

author.title = "Tiến sĩ Lê";
user.comment = "ông tiến sĩ bị gay",


console.log(author);
console.log(author.getName());
console.log(user);


/**
 * Object prototype - basic
 * 1. Prototype là gì ?
 * 2. Sử dụng khi nào ?
 */

/**
 * Object prototype: là những cái cấu thành nên đối tượng.
 * Object prototype là một cơ chế cốt lõi cho phép kế thừa giữa các đối tượng.
 */
// prototype.thuộc tính mới: gán thêm thuộc tính mới cho đối tượng mà mình ko khai báo trong constructor
User.prototype.subject = "CNTT";
console.log(user.subject);
