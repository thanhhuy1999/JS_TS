/* Stack */

// let a = 1;
// let b = a;
// b = 5;
// let c =b;
// b = 23;

// console.log(a);
// console.log(b);
// console.log(c);

/* HEAP */

let a = {
    car_1: 'Mazda',
    car_2: 'Honda',
    car_3: 'Mercedes',
    car_4: 'Ford',
}

let b = a;
b.car_1 = 'Suzuki';
let c = b;
c.car_1 = 'Vinfast';

console.log(a);