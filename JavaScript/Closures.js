function celebrityName(firstName) {
    var nameIntro = "This celebrity is ";
    // Đây là hàm bên trong mà có thể truy cập đến biến của hàm bên ngoài, truy cập được tham số của hàm ngoài.
    function lastName(theLastName) {
        return nameIntro + firstName + " " + theLastName;
    }
    return lastName;
}

var mjName = celebrityName("Michael")("Jackson"); //celebrityName (bên ngoài) đã trả về.

// Closure (lastName) được goi ở đây sau khi hàm ngoài đã trả về.
// Closure vẫn có thể truy cập được biến và tham số của hàm bên ngoài.
console.log(mjName) // This celebrity is Michael Jackson.