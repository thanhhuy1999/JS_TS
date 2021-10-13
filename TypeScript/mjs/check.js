// interface vehicle{
//     id: number;
//     name ?: string;
//     run (): void 
// }
// class car implements vehicle {
//      id : number;
//     public name : string;
//     private age : number;
//     constructor(id: number, name: string, age: number){
//         this.id = id;
//         this.name = name;
//         this.age = age;
//     }
//     setId (init_id:number): void{
//         this.id = init_id;
//     }
//     getId ():number{
//         return this.id;
//     }
//     run(): void{}
// }
// class can extend only single class
// class Mazda extends car{
//     private tyre : string;
//     constructor(id : number ,name: string, age: number, tyre : string){
//         super(id, name, age)
//         this.tyre = tyre;
//     }
// }
// let b = new Mazda(2,'a',3,'tyre')
// console.log(b.name);
// let dog = new animal(1,'dog',3)
// dog.setId(5)
// console.log(dog.getId());
// interface motorbike extends vehicle, bike{
//     readonly v : number;
//     getV() : number;
// }
// let merc : motorbike = {id:1 , name : 'Merc',  run(): void{}, 
//                         test: 'string', v: 13, getV():number{return 10}}
// console.log(merc);
// like interface
// abstract class name_test{
//     name : string;
//     getName(): void {
//          console.log('test');
//      }
//    getId ():void {}
// }
// let dac : name_test = {name:'dac',getName():void{console.log('test');
// }, getId():void{}}
// dac.getName()
//overloading in function
// function sum (a: number, b: number):void;
// function sum (a: string, b: string):void;
// function sum (a: number, b: string):void;
// function sum (a: any, b: any):void{
//     return a + b
// };
//overloading in class
class HinhHoc {
    draw(param1, param2) {
        if (param1 === undefined && param2 === undefined) {
            console.log('Ve hinh');
        }
        if (param2 === undefined && param1 !== undefined) {
            console.log('Ve hinh vuong');
        }
        if (param1 !== undefined && param2 !== undefined) {
            console.log('Ve hinh chu nhat');
        }
    }
}
//static và non-static
class Circle {
    constructor() {
        this.pi = 3;
    }
    static calculateArea(radius) {
        console.log(this.pi * radius * radius);
    }
    calculateCircumference(radius) {
        console.log(2 * this.pi * radius);
    }
}
Circle.pi = 3.14;
let b = new Circle();
console.log(b.calculateCircumference);
//# sourceMappingURL=check.js.map