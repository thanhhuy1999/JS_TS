/*
    Từ khoá this chỉ đến đối tượng đang chứa nó
    Đối tượng ở trước dấu chấm là đối tượng chứa mà this trỏ tới
    Nếu đứng ở ngoài 1 phương thức thì this tham chiếu tới global (window)
    This trong contructor function và class đại diện cho đối tượng được tạo
    This trong 1 hàm là undefined ở strict mode
*/
// const animal = {
//     numOfLeg: 4,
//     name: "animal",
//     barking() {
//         console.log(this)
//     },
//     dog: {
//         name: 'dog',
//         barkingDog() {
//             console.log(this);
//         }
//     }
// }
// // animal.dog.barkingDog();
// console.log(this === window);
// console.log(this);

//This trong object contructor function
//Trỏ tới đối tượng được khởi tạo
// function Car(name, color, weight) {
//     this.name = name
//     this.color = color
//     this.weight = weight
//     this.run = function () {
//         console.log(this);
//     }
// }
// const Mazda = new Car('Mazda', 'Black', 210)
// Mazda.run();

//This trong 1 fuction -> global (window)
// Trong strict mode this là undefined
'use strict'
function myFuction() {
    console.log(this);
}

myFuction()