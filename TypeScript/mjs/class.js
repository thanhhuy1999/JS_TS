// //Example
class person {
    constructor(name, age, addr) {
        this.name = name;
        this.age = age;
        this.addr = addr;
    }
    add(a, b) {
        console.log(a + b);
    }
}
class employee extends person {
    constructor(emID, name, age, addr) {
        super(name, age, addr);
        this.emID = emID;
    }
    display() {
        console.log('STT: ' + this.emID + ' Name: ' + this.name + ' age: ' + this.age + ' addr: ' + this.addr);
    }
}
// let a  = new employee(1,'Dac',22,'Thaibinh')
// a.display();
//abstract class
// abstract class Person {
//     name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
//     display(): void{
//         console.log(this.name);
//     }
//     abstract find(name:string): Person;
// }
// class Employee extends Person { 
//     empCode: number;
//     constructor(name: string, code: number) { 
//         super(name); // must call super()
//         this.empCode = code;
//     }
//     find(name:string): Person { 
//         // execute AJAX request to find an employee from a db
//         return new Employee(name, 1);
//     }
// }
// let emp: Person = new Employee("James", 100);
// emp.display(); //James
// let emp2: Person = emp.find('Steve');
//Data modifier: truy cập properties, methods trong class
//static 
//static và non-static
// class Circle {
//     static pi = 3.14;
//     pi = 3;
//     static calculateArea(radius: number): void {
//         console.log(this.pi * radius * radius);
//     }
//     calculateCircumference(radius: number): void {
//         console.log(2 * this.pi * radius);
//     }
// }
// console.log(Circle.pi); // returns 3.14
// let circleObj = new Circle();
// console.log(circleObj.pi); // returns 3
// Circle.calculateArea(5); // returns 78.5
// circleObj.calculateCircumference(5) // returns 31.4000000
//# sourceMappingURL=class.js.map