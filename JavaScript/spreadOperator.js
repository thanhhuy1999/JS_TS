/*==================================================================================*/

// const hello = {hello: "Hello"}
// const world = {world: "World!"}
// // concat obj
// const helloWorld = { ...hello, ...world}
// console.log(helloWorld) // Object {  hello: "Hello",   world: "World!"  }
//                                 //{  "Hello", "World!"  }
/*==================================================================================*/

// const cars = ['Mazda' , 'Honda' , 'Mercedes']

// const vehicle = [...cars]; 
// console.log(vehicle) // Array(?) [ ?????????? ]

/*====================================INPUT ARGUMENT==============================================*/

// const numbers = [37, -17, 7, 0]
// //console.log( Math.min( numbers) ) ;    

// //Sử dụng spread operator
// console.log(Math.min(...numbers)) // -17
// console.log(Math.max(...numbers)) // 37

/*================================CONCAT==================================================*/

// const Japan = ['Mazda','Honda','Suzuki'] ;
// const Germany = ['BWM', 'Audi', 'Mercedes'] ; 
// const VietNam = ['VinFast',...Japan, ...Germany] ; 
// console.log(VietNam ) //  Array(5) [ ?????????????? ]

/*==================================================================================*/
const array = ['1- ', '2-', '3-']
const copyWithEquals = array
const copyWithSpread = [...array]

array[0] = '5 -'; //thay đổi phần tử đầu tiên của mảng array

console.log(...array) //
console.log(...copyWithEquals) //
console.log(...copyWithSpread) //
//let i ;
//'use strict';

// for(var i = 0; i < 5; i++) {    
//         setTimeout(function(){
//                 console.log(i);
//         }, 5000);

// }
// console.log(i);



