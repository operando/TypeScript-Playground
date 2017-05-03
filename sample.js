function greeter(person) {
    return "Hello, " + person;
}
var user = "Jane User";
function greeter2(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user2 = { firstName: "hogehoge", lastName: "mugemuge" };
document.body.innerHTML = greeter(user);
document.body.innerHTML = greeter2(user2);
var Student = (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
var user3 = new Student("hoge", "M.", "muge");
document.body.innerHTML = greeter2(user3);
// types
var isDone = false;
var d = 6;
var name_ = "hoge";
var template = "mmmm " + name_ + "\n\nokoko\n";
var array = [1, 0, 3];
var list = [1, 0, 3];
var pair = ["hoge", 0];
// let pair2: [string, number] = [0, "hoge"]; //error
pair[0].length;
pair[1].toString();
// string or numberの型なら入られれる
pair[2] = "mugemuge";
pair[3] = 3;
// pair[4] = false; // error
// numberingが0から振られる
// Rad = 0,Green = 1,Blue = 2
var Color;
(function (Color) {
    Color[Color["Rad"] = 0] = "Rad";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Blue;
var colorName = Color[2];
alert(colorName);
// numberingを1から振るようにする
var ColorNumber;
(function (ColorNumber) {
    ColorNumber[ColorNumber["Rad"] = 1] = "Rad";
    ColorNumber[ColorNumber["Green"] = 2] = "Green";
    ColorNumber[ColorNumber["Blue"] = 3] = "Blue";
})(ColorNumber || (ColorNumber = {}));
// numberingを全て独自で振る
var ColorNumber2;
(function (ColorNumber2) {
    ColorNumber2[ColorNumber2["Rad"] = 1] = "Rad";
    ColorNumber2[ColorNumber2["Green"] = 3] = "Green";
    ColorNumber2[ColorNumber2["Blue"] = 5] = "Blue";
})(ColorNumber2 || (ColorNumber2 = {}));
var a = 2;
a = "gegegege";
function returnVoid() {
    alert("void");
}
var u = undefined;
var n = null;
function error(message) {
    throw new Error(message);
}
function fail() {
    return error("Something failed");
}
function infiniteLoop() {
    while (true) {
    }
}
