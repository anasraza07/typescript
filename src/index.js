// ************ //
// TYPESCRIPT - MOSH
var age = 12;
var username = "anas";
var isLogin = false;
if (age < 20) {
    age = age + 10;
}
// console.log(age);
var sales = 123456789;
var course = "typeScript";
var isPublished = false;
var level;
function render(document) {
    console.log(document);
}
// array
var numbers = [];
// numbers.forEach(n => n.)
// tuples
var user = [1, "Anas"];
; // to generate more optimized code in index.js file
// enum Size { Small, Medium, Large };
// enum Size { Small = "s", Medium = "m", Large = "l" }; // for strings
// enum Size { Small = 1, Medium, Large } // value starting from 1
var mySize = 1 /* Size.Medium */;
// console.log(mySize);
// functions:
function calculateTax(income, taxYear) {
    if (taxYear === void 0) { taxYear = 2022; }
    if (income < 50000 && taxYear < 2022) {
        return income * 1.2;
    }
    else {
        return income * 1.3;
    }
}
var employee = {
    id: 1,
    name: "Anas",
    retire: function (date) {
        console.log(date);
    }
};
// union types:
function kgToLbs(weight) {
    // narrowing
    if (typeof weight === "number") {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
kgToLbs(10);
kgToLbs("10");
var textBox = {
    drag: function () { },
    resize: function () { }
};
// let quantity: (50 | 100) = 100;
var quantity = 100;
// nullable types:
function greet(name) {
    if (name) {
        console.log(name.toUpperCase());
    }
    else {
        // console.log("null or undefined value!!!")
    }
}
greet(undefined);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
var customer = getCustomer(0);
// if (customer !== null && customer !== undefined)
// console.log(customer?.birthday?.getFullYear());
// optional element access operator
// customers?.[0]
// optional call
var log = null;
log === null || log === void 0 ? void 0 : log("a");
// **************** //
// GPT CONCEPTS
// generic types:
function wrap(value) {
    console.log(value);
    return value;
}
var u = {
    name: "Anas"
};
// without Partial:
// let u1: { name?: string, age?: number }
var requiredUser = {
    name: "Anas",
    age: 20,
};
var readOnlyUser = {
    age: 20,
};
// readOnlyUser.age = 23 // error
var selectedUser = {
    age: 20
};
// *********** //
// FREECODECAMP
console.log(Math.floor(12.29));
