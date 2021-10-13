//chuyen doi 1 mang thanh 1 chuoi
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();

//xoa phan tu cuoi cung trong mang
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();  // Removes "Mango" from fruits

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let x = fruits.pop();  // x = "Mango"

//them 1 phan tu vao cuoi mang
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");   // Adds "Kiwi" to fruits

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let x = fruits.push("Kiwi");   //  x = 5

//xoa phan tu dau tien cua mang
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();   // Removes "Banana" from fruits

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let x = fruits.shift();    // x = "Banana"

//them 1 phan tu moi vao dau mang
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");    // Adds "Lemon" to fruits

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");    // Returns 5

//xoa 1 phan tu khoi mang bang delete
const fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[0];           // Changes the first element in fruits to undefined

// cat mang tư vi tri a den vi tri b
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");

// su dung splice de loai bo phan tu dau tien
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 1);   // Removes the first element

//ghep 2 mang vơi nhau
//concat co the nhan nhieu doi so
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myGirls.concat(myBoys);








