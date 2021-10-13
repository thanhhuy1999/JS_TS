
//syntax
// var [identifier] : [type-annotation]  = value;  //initialized
// var [identifier] : [type-annotation];  //uninitialized
// var _name:string = 'Dac';
// var score1:number = 50;
// var score2:number = 42.50;
// var sum = score1 + score2; 
// console.log("name: "+ _name);
// console.log("first score: "+score1); 
// console.log("second score: "+score2); 
// console.log("sum of the scores: "+sum);

// function display(id:number, name:string)
// {
//     console.log("Id = " + id + ", Name = " + name);
// }

// var employee : { 
//     id: number; 
//     name: string; 
// }; 


// employee = { 
//   id: 3, 
//   name : "John"
// }



// var num:number = "hello"     // will result in a compilation error
// var str:string = '1' 
// var str2:number = <number> <any> str   //str is now of type number 
// console.log(typeof(str2))
// console.log(typeof(str));

// console.log(str2);




//let employeeName:string = "John Smith"; 
//let employeeDept:string = "Finance"; 

// // Pre-ES6 
//let employeeDesc1: string = employeeName + " works in the " + employeeDept + " department."; 

// // Post-ES6 
//let employeeDesc2: string = `${employeeName} works in the ${employeeDept} department.`; 

// console.log(employeeDesc1);//John Smith works in the Finance department. 
// console.log(employeeDesc2);//John Smith works in the Finance department.


//let fruits: Array<string> = ['Apple', 'Orange', 'Banana'];
//let fruits_: string[] = ['Apple', 'Orange', 'Banana']; 
//let _fruits: Array<string>;
// _fruits = ['Apple', 'Orange', 'Banana']; 
//let ids: Array<number>;
//ids = [23, 34, 100, 124, 44]; 
// let values: (string | number)[] = ['Apple', 2, 'Orange', 3, 4, 'Banana']; 
// // or 
//let _values: Array<string | number> = ['Apple', 2, 'Orange', 3, 4, 'Banana']; 
// for(var index in fruits)
// { 
//     console.log(fruits[index]);  // output: Apple Orange Banana
// }

// for(var i = 0; i < fruits.length; i++)
// { 
//     console.log(fruits[i]); // output: Apple Orange Banana
// }

//Tuple
// var employee: [number, string] = [1, "Steve"];
// employee[0]; // returns 1
// employee[1]; // returns "Steve"
// var person: [number, string, boolean] = [1, "Steve", true];

// var employee: [number, string] = [1, "Steve"];
// employee.push(2, "John");
// console.log(employee); //Output: [1, 'Steve', 2, 'Bill']
//employee.push(true)  //error

// var user: [number, string, boolean, number, string];// declare tuple variable
// user = [1, "Steve", true, 20, "Admin"];// initialize tuple variable

//var employee: [number, string][];
//employee = [[1, "Steve"], [2, "Bill"], [3, "Jeff"]];
function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: number, b: string): number;
function add(a: any, b: any): any {
    return a + b;
}

add("Hello ", "Steve"); // returns "Hello Steve" 
add(10, 20); // returns 30 
var a = add(5, 'hello');
console.log(a);
console.log(typeof a);



 // let Greet = (greeting: string, ...names: string[]) => {  //không được để rest lên đầu ds param
 //     return greeting + " " + names.join(", ") + "!";
 // }
 // Greet("Hello", "Steve", "Bill"); // returns "Hello Steve, Bill!"
 // Greet("Hello");// returns "Hello !"







