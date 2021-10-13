// var users = [
//     {
//         id: 1,
//         name: "Thanh Huy"
//     },
//     {
//         id: 2,
//         name: "Duc Cuong"
//     },
//     {
//         id: 3,
//         name: "Nam Duong"
//     }
// ]

// var comments = [
//     {
//         id: 1,
//         user_id: 1,
//         content: "Yasuo",
//     },
//     {
//         id: 2,
//         user_id: 2,
//         content: "Malphite"
//     }
// ]
// // 1. Lấy comment
// // 2. Từ comment lấy ra user_id
// // từ user_id lấy ra id tương ứng

// //Fake API

// function getComments() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(comments)
//         }, 1000)
//     })
// }

// function getUsersByIds(userIds) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             var results = users.filter((user) => {
//                 return userIds.includes(user.id)
//             });
//             resolve(results)
//         }, 1000)
//     })
// }

// getComments()
//     .then(function (comments) {
//         var userIds = comments.map(function (comment) {
//             return comment.userId;
//         })

//         return getUsersByIds(userIds)
//             .then((users) => {
//                 return {
//                     users: users,
//                     comments: comments,
//                 }
//             })
//             .then((data) => {
//                 //console.log(data);
//                 var commentBlock = document.getElementById('comment-block')
//                 var html = '';
//                 data.comments.forEach((comment) => {
//                     var user = data.users.find((user) => {
//                         return user.id === comment.userId
//                     })
//                 })
//                 html += `${users.name}: ${comments.content}`
//             })
//         commentBlock.innerHTML = html;
//     })


//in ra cac ham bat dong bo bang promise
// function sleep(ms) {
//     return new Promise((resolve) => {
//         setTimeout(resolve, ms)
//     })
// }
// sleep(1000)
//     .then(() => {
//         console.log(1);
//         return sleep(1000)
//     })
//     .then(() => {
//         console.log(2);
//         return sleep(1000)
//     })
//     .then(() => {
//         console.log(3);
//         return sleep(1000)
//     })
//     .then(() => {
//         console.log(4);
//         return sleep(1000)
//     })

// promise vơi banh sinh nhat
// let money = 1000
// const duthahoBuysCake = cakeType => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (money > 1000) {
//                 resolve(cakeType)
//             } else {
//                 reject('không đủ tiền')
//             }
//         }, 1000)
//     })
// }
// money = 199
// const promiseSuccess = duthahoBuysCake('bánh sinh nhật')
//     .then(cake => console.log(cake))
//     .catch(nocake => console.log(nocake))


let promise = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('binh')
    },1000)
})



// let a  = (i)=>{
//     return new Promise((res, rej)=>{
//         setTimeout(()=>{
//             console.log(i);
//             res(i);
//        },1000)
//         })
        
// }

// a(0)
// .then(data => a(++data))
// .then(data => a(++data))
// .then(data => a(++data))
// .then(data => a(++data))
