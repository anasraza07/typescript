"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let age = 12;
let username = "anas";
let isLogin = false;
if (age < 20) {
    age = age + 10;
}
let sales = 123_456_789;
let course = "typeScript";
let isPublished = false;
let level;
function render(document) {
    console.log(document);
}
let numbers = [];
let user = [1, "Anas"];
;
let mySize = 1;
function calculateTax(income, taxYear = 2022) {
    if (income < 50_000 && taxYear < 2022) {
        return income * 1.2;
    }
    else {
        return income * 1.3;
    }
}
let employee = {
    id: 1,
    name: "Anas",
    retire: (date) => {
        console.log(date);
    }
};
function kgToLbs(weight) {
    if (typeof weight === "number") {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
kgToLbs(10);
kgToLbs("10");
let textBox = {
    drag: () => { },
    resize: () => { }
};
let quantity = 100;
function greet(name) {
    if (name) {
        console.log(name.toUpperCase());
    }
    else {
    }
}
greet(undefined);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
let log = null;
log?.("a");
function wrap(value) {
    console.log(value);
    return value;
}
let u = {
    name: "Anas"
};
let requiredUser = {
    name: "Anas",
    age: 20,
};
let readOnlyUser = {
    age: 20,
};
let selectedUser = {
    age: 20
};
let personExOne;
personExOne = {
    name: "Alice",
    age: 10,
    address: {
        street: "123",
        city: "wonder land"
    }
};
let personExTwo = {
    name: "Alice",
    age: 10,
    address: {
        street: "123",
        city: "wonder land"
    }
};
function addAll(...nums) {
    let result = 0;
    for (const n of nums) {
        result += n;
    }
    return result;
}
const addWithArrow = (num1, num2) => num1 + num2;
const add = function (num1, num2) {
    return num1 + num2;
};
let arrayThree = [1, 2, 3, "A", "B", "C"];
let article = [11, "Title One", true];
article = [12, "Title two", false];
const [id, title, published] = article;
const ali = {
    name: "Ali",
    age: 30,
    greet(msg) {
        console.log(`${this.name} says: ${msg}`);
    }
};
ali.greet("Hello typescript!");
class Product {
    id;
    name;
    price;
    constructor(id, name, price) {
        this.id = id,
            this.name = name,
            this.price = price;
    }
    getProductInfo() {
        return `ID: ${this.id}, Name: ${this.name}, Price: ${this.price}`;
    }
}
const productOne = new Product(1, "Widget", 20.0);
console.log(productOne.getProductInfo());
//# sourceMappingURL=index.js.map