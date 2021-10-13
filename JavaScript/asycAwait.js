let fs = require("fs");

let read = (fileName) => {
    return new Promise((resovle, reject) => {
        fs.readFile(fileName, 'utf8', (err, data) => {
            if (err) {
                return reject(err);
            }
            else {
                resovle(data);
            }
        }, 5000);
    })
}

let open = async (data) => {
    try {
        let res = await read(data);
        console.log('Noi dung trong file la: ' + res);
        return Promise.resolve(res);
    }
    catch (e) {
        return Promise.reject(e);
    }
}

let a = open('./a.txt');


a.then(
    data => console.log(data),
)
    .catch(
        err => console.log(err.toString()),
    )



//read('./a.txt').then(data=> console.log(data), err => console.log( err.toString() ) ) ;

