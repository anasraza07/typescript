// 1:
let username: string = "anasraza07";
let age: number = 20;
let isLoggedIn: boolean = true;
// console.log(username, age, isLoggedIn)

// 2:
let anything: any = 'testing';
let maybeNum: unknown = "ten";
if (typeof maybeNum === "number") {
    console.log(maybeNum.toFixed(2));
} else if (typeof maybeNum === "string") {
    console.log(maybeNum.toUpperCase())
} else {
    console.log("invalid value!")
}

// 3:
let numsArr: number[] = [1, 2, 3, 4, 6, 7, 9];
// numsArr.forEach(n => console.log(n * n));

let personalInfo: [name: string, age: number] = ["Anas", 21];

let strArr: string[] = ["abc", "def", "fruits", "end"];
strArr[4] = "updatedValue";
console.log(strArr);

// 4:
type Product = {
    name: string,
    price: number,
}
let productOne: Product = {
    name: "Football",
    price: 1000,
}
let productTwo: Product = {
    name: "Badminton",
    price: 1500,
}
console.log(productOne.name, productOne.price)
console.log(productTwo.name, productTwo.price)

// 5:
function multiply(a: number, b: number): number {
    return a * b;
}
console.log(multiply(2, 3))

function greeting(name: string) {
    return "Hello, " + name;
}
console.log(greeting("Anas"))

const isLoggedInFunc = (): boolean => {
    const random = Math.floor(Math.random() * 10)
    if (random > 5) return true;
    else return false;
}
console.log(isLoggedInFunc());

// 6:
function tellAge(age: number = 18): void {
    console.log("Your age is", age)
}
tellAge();

function salary(salary?: number): void {
    if (salary) {
        console.log("Your salary is", salary);
    } else {
        console.log("No salary");
    }
}
salary(50_000);


// 7:
let id: number | string = 10;
id = "10";

// 8:

