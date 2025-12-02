"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let username = "anasraza07";
let age = 20;
let isLoggedIn = true;
let anything = 'testing';
let maybeNum = "ten";
if (typeof maybeNum === "number") {
    console.log(maybeNum.toFixed(2));
}
else if (typeof maybeNum === "string") {
    console.log(maybeNum.toUpperCase());
}
else {
    console.log("invalid value!");
}
let numsArr = [1, 2, 3, 4, 6, 7, 9];
let personalInfo = ["Anas", 21];
let strArr = ["abc", "def", "fruits", "end"];
strArr[4] = "updatedValue";
console.log(strArr);
let productOne = {
    name: "Football",
    price: 1000,
};
let productTwo = {
    name: "Badminton",
    price: 1500,
};
function multiply(a, b) {
    return a * b;
}
console.log(multiply(2, 3));
function greeting(name) {
    return "Hello, " + name;
}
console.log(greeting("Anas"));
const isLoggedInFunc = () => {
    const random = Math.floor(Math.random() * 10);
    if (random > 5)
        return true;
    else
        return false;
};
console.log(isLoggedInFunc());
function tellAge(age = 18) {
    console.log("Your age is", age);
}
tellAge();
function salary(salary) {
    if (salary) {
        console.log("Your salary is", salary);
    }
    else {
        console.log("No salary");
    }
}
salary(50_000);
let id = 10;
id = "10";
const firstEmployee = {
    name: "Ali",
    age: 20,
    company: "Xeverse",
    salary: 90_000,
    title: "Developer",
    isFulltime: false
};
let buttonType = "primary";
let themeType = "dark";
let statusType = "error";
let r = 2;
let s = 0;
function log(level, message) {
    switch (level) {
        case "info":
            console.info(`[INFO]: ${message}`);
            break;
        case "debug":
            console.info(`[DEBUG]: ${message}`);
            break;
        case "warn":
            console.info(`[WARN]: ${message}`);
            break;
        case "error":
            console.info(`[ERROR]: ${message}`);
            break;
        default:
            console.log(message);
    }
}
function RecipeCard(props) {
    return props.likes;
}
const myEmployee = {
    name: "Ali",
    age: 20,
    salary: 40_000,
};
function identity(arg) {
    return arg;
}
function processArr(arr) {
    console.log("Length:", arr.length);
    return arr.map(item => item);
}
function getLength(item) {
    return item.length;
}
getLength([1, 2, 4]);
function processObj(obj) {
    console.log("Object:", obj);
}
processObj({ a: 1, b: 2 });
processObj([]);
function printLength(data) {
    console.log("Length", data.length);
}
printLength("hello");
printLength([1, 2, 3]);
let u = {
    name: "Anas"
};
let selectName = {
    name: "anasraza"
};
let OmitAge = {
    name: "ali"
};
function printID(id) {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id.toFixed(2));
    }
}
function printUser(u) {
    if ("email" in u) {
        console.log(u.email);
    }
    else {
        console.log(u.role);
    }
}
function isUser(u) {
    return "email" in u;
}
function printInfo(person) {
    if (isUser(person)) {
        console.log(person.email);
    }
    else {
        console.log(person.role);
    }
}
let person = { name: "anas", email: "ar@ar.com" };
async function fetchUser() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const data = await res.json();
    return data;
}
fetchUser().then(u => console.log(u));
//# sourceMappingURL=practice.js.map