// class animal {
//     constructor(leg, face) {
//         this.leg = leg;
//         this.face = face
//     }

// const { getParsedCommandLineOfConfigFile } = require("typescript");

// }


// let arr = [
//     1,
//     new animal(4, 'thin'),
//     "huy"

// ]

// let obj = new animal(5, 'tron');

// let arr1 = [
//     obj,
//     1,
//     new animal(4, 'thin'),
//     "huy"

// ]
// obj.leg = 10;
// console.log(arr1);
// // console.log(arr);
// // console.log(arr1);


// function obj1(a, b) {
//     this.a = a;
//     this.b = b;
//     let c = 5;
// }

// function obj2() { }
// var obj1_1 = new obj1(5, 6)

// obj2.prototype = new obj1(3, 4);
// var obj2_1 = new obj2();

// console.log(obj2_1.a);
// console.log(obj1_1.a);
// console.log(obj2_1.c);


// const x = function (...x) {
//     let k = (typeof x).length;
//     let y = () => 'Toan Nguyen'.length;
//     let z = { y: y };
//     console.log('y= ' + y());
//     console.log(z);
//     console.log(k);
//     return k - z.y();

// }

// console.log(x());

// function a() {
//     function b() {
//         function c() {
//             e = 3;
//         }
//         c();
//     }
//     b()

// }
// a()
// console.log(e);


// let a = 3;
// let b = 5;
// // [a, b] = [b, a];
// a += b;
// b = a - b;
// a = a - b;
// console.log('a =' + a + " " + 'b = ' + b)


// Promise.resolve().then(() => console.log('promise1 resolved'));


// Promise.resolve().then(() => {
// console.log('promise3 resolved');
// process.nextTick(() => console.log('next tick inside promise resolve handler'));
// });


// Promise.resolve().then(() => console.log('promise4 resolved'));

// setImmediate(() => console.log('set immediate1'));



// process.nextTick(() => console.log('next tick1'));
// process.nextTick(() => console.log('next tick2'));



// setTimeout(() => console.log('set timeout'), 0);
// setImmediate(() => console.log('set immediate3'));


// var listItems1 = document.getElementsByTagName('ul')
// console.log(listItems1);

var lists = document.querySelectorAll('h1')

//  lists.onclick = function(e) {
//      console.log(e.target);
//  }
for(var i = 0; i< lists.length; i++){
    lists[i].onclick = function(e){
        console.log(e.target)
    }
}