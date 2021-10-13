/***************************OBJ_LITERAL******************************************/
let obj_1 = {
    first_name: "Huy",
    last_name: "Thanh",
    age: 22,
    getname: function (data) {
        console.log(data);
    }
}

let copyObj = obj_1; //shallow copy

// let deepCopy = { ...obj_1 } //deep copy
// deepCopy.first_name = 5;

let deepCopy1 = Object.assign({ }, obj_1);

console.log(obj_1.first_name);
// // let a = new obj_1;  //error
// console.log(typeof obj_1);
// let a = obj_1;
// console.log(typeof obj_1.getname);
// obj_1.getname('Hello Mercedes!!!!');



/***************************OBJ_FUNCTION_CONSTRUCTOR*****************************/

// function Person(firstName, lastName) {

//     var fstName = firstName;
//     var lstName = lastName;

//     this.setFirstName = function(firstName) { 
//         fstName = firstName; 
//     };

//     this.getFirstName = function() {
//         return fstName; 
//     };

//     this.setLastName = function(lastName) { 
//         lstName = lastName; 
//     };

//     this.getLastName = function() { 
//         return lstName; 
//     };
//   }

// function Person_2() {

// }

// Person_2.prototype = new Person();  // ke thua tr


//   var person1 = new Person('Huy', 'Thanh');
//   console.log(person1.fstName);         // Undefined, không thể truy cập được
//   console.log(person1.getFirstName());  // Khoa

//   /*======================================================================= */


//   // Viết một Constructor Function khác
//   function SuperMan(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   // Ta muốn SuperMan sẽ kế thừa các thuộc tính của Person
//   // Sử dụng prototype để kế thừa
//   SuperMan.prototype = new Person();

//   // Tạo một object mới bằng Constructor Function 
//   var sm = new SuperMan('Huy', 'Thanh');
//   sm.sayName(); //



/***************************OBJ_CLASS***************************************/


// class Car {
//     constructor(brand) {
//       this.carname = brand;
//     }
//     present() {
//       return 'I have a ' + this.carname;
//     }
//   }

// class Model extends Car {
//     constructor(brand, mod) {
//       super(brand);
//       this.model = mod;
//     }
//     show() {
//       return this.present() + ', it is a ' + this.model;
//     }
//   }

//   let myCar = new Model("Ford", "Mustang");
//   console.log(myCar.show());

// /***********************************************************/

//   class Car {
//     constructor(name) {
//       this.name = name;
//     }
//     static hello(x) {
//       return "Hello " + x.name;
//     }
//   }
//   let a = new Car;
//   console.log(  a.hello(myCar)  );
//   console.log(  Car.hello(myCar)  );


