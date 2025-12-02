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
console.log(customer?.birthday?.getFullYear());
let log = null;
log?.("a");
function wrap(value) {
    console.log(value);
    return value;
}
wrap("Anas");
wrap(true);
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
//# sourceMappingURL=index.js.map