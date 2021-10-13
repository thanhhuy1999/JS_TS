Person.prototype.showAge = function () {
    console.log(this.age);
};

//Tạo ra 1 hàm khởi tạo con (sẽ dùng để kế thừa lớp cơ sở)
function Student(_id, _score) {
    this.id = _id;
    this.score = _score;
}
//Thực hiện kế thừa, gán hàm khởi tạo của Animal cho prototype của Bird
Student.prototype = new Person(19, 'Khoa');
Student.prototype.showScore = function () {
    console.log(this.score);
};

//Kiểm tra sự kế thừa
var student1 = new Student(01, 100);
student1.age = 19;
student1.showAge();       //19
student1.showScore();     //100