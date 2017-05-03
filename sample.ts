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

let user2 = {firstName: "hogehoge", lastName: "mugemuge"};

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
enum Color{Rad, Green, Blue}
let c: Color = Color.Blue;
let colorName: string = Color[2];
alert(colorName);

// numberingを1から振るようにする
enum ColorNumber{Rad = 1, Green, Blue}

// numberingを全て独自で振る
enum ColorNumber2{Rad = 1, Green = 3, Blue = 5}

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

let some :any = "gegege";
let StringLen : number = (some as string).length;