//khoi tao 1 mang
const cars = [
    "Saab",
    "Volvo",
    "BMW"
];

// khoi tao 1 mang cach 2
const cars = [];
cars[0] = "Saab";
cars[1] = "Volvo";
cars[2] = "BMW";

// khoi tao mang bang tu khoa array
const cars = new Array("Saab", "Volvo", "BMW");

// truy cap 1 phan tu trong mang
const cars = ["Saab", "Volvo", "BMW"];
let x = cars[0];    // x = "Saab"

// thay doi gia tri 1 phan tu trong mang
const cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Opel";

// truy cap toan bo mang
const cars = ["Saab", "Volvo", "BMW"];
document.getElementById("demo").innerHTML = cars;

// lay ra do dai mang
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.length;   // Returns 4

// truy cap phan tu cuoi cung cua mang 
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[fruits.length - 1];  // Returns "Mango"

//them 1 phan tu moi vao mang
const fruits = ["Banana", "Orange", "Apple"];
fruits.push("Lemon");  // Adds a new element (Lemon) to fruits

//hoac them nhu sau
const fruits = ["Banana", "Orange", "Apple"];
fruits[fruits.length] = "Lemon";  // Adds "Lemon" to fruits

//viec them 1 phan tu co chi so lon nhu duoi day
//tao ra nhung phan tu undefined o giua
const fruits = ["Banana", "Orange", "Apple"];
fruits[6] = "Lemon";  // Creates undefined "holes" in fruits

//khoi tao 1 mang trong va them phan tu vao     
const person = [];
person[0] = "John";
person[1] = "Doe";
person[2] = 46;
person.length;    // Will return 3
person[0];        // Will return "John"



