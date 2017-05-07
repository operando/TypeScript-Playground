function greeter(person: string) {
    return "Hello, " + person;
}

var user = "Jane User";

// var user = [0, 1, 2]; // NG!!!!
// error TS2345: Argument of type 'number[]' is not assignable to parameter of type 'string'.

interface Person {
    firstName: string;
    lastName: string;
}

function greeter2(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName
}

let user2 = { firstName: "hogehoge", lastName: "mugemuge" };

document.body.innerHTML = greeter(user);
document.body.innerHTML = greeter2(user2);


class Student {
    fullName: string;

    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

let user3 = new Student("hoge", "M.", "muge");

document.body.innerHTML = greeter2(user3);


// types

let isDone: boolean = false;
let d: number = 6;

let name_ = "hoge";

let template = `mmmm ${name_}

okoko
`;

let array: number[] = [1, 0, 3];
let list: Array<number> = [1, 0, 3];

let pair: [string, number] = ["hoge", 0];
// let pair2: [string, number] = [0, "hoge"]; //error

pair[0].length;
pair[1].toString();

// string or numberの型なら入られれる
pair[2] = "mugemuge";
pair[3] = 3;
// pair[4] = false; // error

// numberingが0から振られる
// Rad = 0,Green = 1,Blue = 2
enum Color { Rad, Green, Blue }
let c: Color = Color.Blue;
let colorName: string = Color[2];
alert(colorName);

// numberingを1から振るようにする
enum ColorNumber { Rad = 1, Green, Blue }

// numberingを全て独自で振る
enum ColorNumber2 { Rad = 1, Green = 3, Blue = 5 }

let a: any = 2;
a = "gegegege";

function returnVoid(): void {
    alert("void");
}

let u: undefined = undefined;
let n: null = null;

function error(message: string): never {
    throw new Error(message);
}

function fail() {
    return error("Something failed");
}
function infiniteLoop(): never {
    while (true) {
    }
}

// Type assertions

let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;

let some: any = "gegege";
let StringLen: number = (some as string).length;

function f(shouldInitialize: boolean) {
    if (shouldInitialize) {
        var x = 10;
    }

    // 変数xは関数内ならどこかでもアクセスできる
    // scopeがblock内ではない
    return x;
}

f(true);  // returns '10'
f(false); // returns 'undefined'

// NG
// for (var i = 0; i < 10; i++) {
//     setTimeout(function() { console.log(i); }, 100 * i);
// }

// OK
for (var i = 0; i < 10; i++) {
    // capture the current state of 'i'
    // by invoking a function with its current value
    (function (i) {
        setTimeout(function () { console.log(i); }, 100 * i);
    })(i);
}

function f2(input: boolean) {
    let a = 100;

    if (input) {
        let b = a + 1;
        return b;
    }

    // NG
    // letはscopeはblockになる
    // return b;
    return a;
}

try {
    throw "oh no!";
} catch (e) {
    // catchの変数もblockになる
    console.log("Oh well.");
}

// Error: 'e' doesn't exist here
// console.log(e);

function f3(condition, x) {
    // let x = 100;// これはNG
    if (condition) {
        let x = 100; // これはOK...なるほどー...
        return x;
    }

    return x;
}

f3(false, 0); // returns '0'
f3(true, 0);  // returns '100'

function sumMatrix(matrix: number[][]) {
    let sum = 0;
    // letだけど++とかできるのかよ...
    for (let i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (let i = 0; i < currentRow.length; i++) {
            sum += currentRow[i];
        }
    }

    return sum;
}

function theCityThatAlwaysSleeps() {
    let getCity;

    if (true) {
        let city = "Seattle";
        getCity = function () {
            return city;
        }
    }

    return getCity();
}

for (let i = 0; i < 10; i++) {
    setTimeout(function () { console.log(i); }, 100 * i);
}

const num = 100;
const obj = {
    name: "test",
    num: num
};

// OK
// 参照する値は変更可能?
obj.name = "mugemuge";
obj.num++;

// num++;// NG

console.log(num);

// Array destructuring

let numArray = [1, 2];
let [a1, b2] = numArray;
console.log(a1);
console.log(b2);

// swap variables
[a1, b2] = [b2, a1];

function f4([a, b]: [number, number]) {
    console.log(a);
    console.log(b);
}

f4([1, 2]);


let [first, ...rest] = [1, 2, 3, 4];
console.log(first);
console.log(rest);

// let [first] = [1, 2, 3, 4];
// console.log(first); // 1

let [, second, , fourth] = [1, 2, 3, 4];

