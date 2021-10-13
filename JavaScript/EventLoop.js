

setTimeout(function () {
    setTimeout(function () {
        console.log("TIMEOUT 1");
        setImmediate(function () {
            console.log("SETIMMEDIATE 1");
        });
    }, 0);
    setTimeout(function () {
        console.log("TIMEOUT 2");
        setImmediate(function () {
            console.log("SETIMMEDIATE 2");
        });
    }, 0);
    setTimeout(function () {
        console.log("TIMEOUT 3");
    }, 0);

    setImmediate(function () {
        console.log('cuong');
    })

}, 0)


// setInterval(function () {
//     setImmediate(function () {
//         console.log('1');
//     })
//     setTimeout(function () {
//         console.log('2');
//     })
// }, 5000)
