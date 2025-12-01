// 1:
var username = "anasraza07";
var age = 20;
var isLoggedIn = true;
// console.log(username, age, isLoggedIn)
// 2:
var anything = 'testing';
var maybeNum = "ten";
if (typeof maybeNum === "number") {
    console.log(maybeNum.toFixed(2));
}
else if (typeof maybeNum === "string") {
    console.log(maybeNum.toUpperCase());
}
else {
    console.log("invalid value!");
}
// 3:
var numsArr = [1, 2, 3, 4, 6, 7, 9];
// numsArr.forEach(n => console.log(n * n));
var personalInfo = ["Anas", 21];
var strArr = ["abc", "def", "fruits", "end"];
strArr[4] = "updatedValue";
console.log(strArr);
var productOne = {
    name: "Football",
    price: 1000,
};
var productTwo = {
    name: "Badminton",
    price: 1500,
};
console.log(productOne.name, productOne.price);
console.log(productTwo.name, productTwo.price);
// 5:
function multiply(a, b) {
    return a * b;
}
console.log(multiply(2, 3));
function greeting(name) {
    return "Hello, " + name;
}
console.log(greeting("Anas"));
var isLoggedInFunc = function () {
    var random = Math.floor(Math.random() * 10);
    if (random > 5)
        return true;
    else
        return false;
};
console.log(isLoggedInFunc());
// 6:
function tellAge(age) {
    if (age === void 0) { age = 18; }
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
salary(25000);
