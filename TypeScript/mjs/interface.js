// let user1: Person = {name:'Dac', age: 18, addr: 'Hanoi', phoneNumber: 15656};
// let user2: Person = {name:'Binh',age: 22, addr: 'Haiphong',phoneNumber: 456766};
// console.log(user1);
// console.log(typeof user1);
// interface Ham{
//     (so1: number, so2: number):void;
// }
// function Add(so1:number, so2:number):void {
//     console.log(so1 + so2);
// }
// function Mul(so1:number, so2:number):void {
//     console.log(so1 * so2);
// }
// let tong: Ham = Add;
// tong(3,4); //7
// tong = Mul;
// tong(3,4); //12
// interface IEmployee {
//     empCode: number;
//     empName: string;
//     empDept?:string; //có thể có hoặc không
//     readonly age: number;
// }
// let empObj1:IEmployee = {   // OK
//     empCode:1,
//     empName:"Steve",
//     //empDept:'sadsad',
//     age: 19
// }
// empObj1.age = 20; //error
//extend
// interface IPerson {
//     name: string;
//     gender: string;
// }
// interface IEmployee extends IPerson {
//     empCode: number;
// }
// let empObj:IEmployee = {
//     empCode:1,
//     name:"Bill",
//     gender:"Male"
// }
//implement
// interface IEmployee {
//     empCode: number;
//     name: string;
//     getSalary:(empCode: number)=>number;
// }
// class Employee implements IEmployee { 
//     empCode: number;
//     name: string;
//     constructor(code: number, name: string) { 
//                 this.empCode = code;
//                 this.name = name;
//     }
//     getSalary(empCode:number):number { 
//         return 20000;
//     }
// }
// let emp = new Employee(1, "Steve");
// export var dac1 = (a: number, b: number) => (a + b);
//# sourceMappingURL=interface.js.map