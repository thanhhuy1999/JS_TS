
// 1  34  67  910  12

// let count =0;

//     console.log(1);
//     setTimeout( () => {
//         console.log(2);
//         console.log(3);
//         setTimeout(() => {
//             console.log(4);
//             console.log(5);
//             setTimeout(() => {
//                 console.log(6);
//             },5000);
//         },6000);
//     },7000);
/*=========================================================================*/


/*=========================================================================*/






/***************************Cách 1********************************************/



/***************************Cách 2********************************************/

// let count = (data) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (typeof data != 'number') {
//                 return reject(new Error('Kieu du lieu truyen vao phai la kieu Nmber'));
//             }
//             else {
//                 console.log(data);
//                 data++;
//                 return resolve(data);
//             }
//         }, 2000);
//     });
// }


// let a = count(1)
//     .then(
//         (data) => count(data),
//     )
//     .then(
//         (data) => count(data),
//     )
//     .then(
//         (data) => count(data),
//     )
//     .then(
//         (data) => console.log(data),
//     )
//     .catch(
//         (data) => console.log(data.toString()),
//     )
