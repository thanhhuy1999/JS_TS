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
function add(a, b) {
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
//# sourceMappingURL=TS.js.map