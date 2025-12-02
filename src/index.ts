// ************ //
// TYPESCRIPT - MOSH

let age: number = 12;
let username: string = "anas";
let isLogin: boolean = false;
if (age < 20) {
    age = age + 10;
}
// console.log(age);

let sales = 123_456_789;
let course = "typeScript"
let isPublished = false;
let level;

function render(document: any) {
    console.log(document);
}

// array
let numbers: number[] = [];
// numbers.forEach(n => n.)

// tuples
let user: [number, string] = [1, "Anas"];
// user[0].
// user[1].

// enums:
const enum Size { Small, Medium, Large }; // to generate more optimized code in index.js file

// enum Size { Small, Medium, Large };
// enum Size { Small = "s", Medium = "m", Large = "l" }; // for strings
// enum Size { Small = 1, Medium, Large } // value starting from 1

let mySize: Size = Size.Medium;
// console.log(mySize);

// functions:
function calculateTax(income: number, taxYear: number = 2022): number {
    if (income < 50_000 && taxYear < 2022) {
        return income * 1.2;
    } else {
        return income * 1.3;
    }
}
// calculateTax(120);

// objects:
// type aliases:
type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void;
}

let employee: Employee = {
    id: 1,
    name: "Anas",
    retire: (date: Date) => {
        console.log(date);
    }
}

// union types:
function kgToLbs(weight: number | string): number {
    // narrowing
    if (typeof weight === "number") {
        return weight * 2.2
    } else {
        return parseInt(weight) * 2.2
    }
}
kgToLbs(10);
kgToLbs("10");

// intersection types:
type Draggable = {
    drag: () => void;
}

type Resizable = {
    resize: () => void;
}

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag: () => { },
    resize: () => { }
}

// literal types:
type Quantity = 50 | 100;
// let quantity: (50 | 100) = 100;
let quantity: Quantity = 100;

// nullable types:
function greet(name: string | null | undefined) {
    if (name) {
        console.log(name.toUpperCase())
    } else {
        // console.log("null or undefined value!!!")
    }
}
greet(undefined);

// optional chaining:
type Customer = {
    birthday?: Date
}

function getCustomer(id: number): Customer | null {
    return id === 0 ? null : { birthday: new Date() }
}

let customer = getCustomer(0);
// if (customer !== null && customer !== undefined)
console.log(customer?.birthday?.getFullYear());

// optional element access operator
// customers?.[0]

// optional call
let log: any = null;
log?.("a");

// **************** //

// GPT CONCEPTS
// generic types:
function wrap<T>(value: T) {
    console.log(value);
    return value;
}
// wrap(12).toUpperCase(); // ERROR: property 'toUpperCase' does not exist on type 12.
wrap("Anas");
wrap(true);

// utility types:
type User = {
    name?: string,
    age?: number
}
let u: Partial<User> = {
    name: "Anas"
}
// without Partial:
// let u1: { name?: string, age?: number }

let requiredUser: Required<User> = {
    name: "Anas",
    age: 20,
}

let readOnlyUser: Readonly<User> = {
    age: 20,
}
// readOnlyUser.age = 23 // error

let selectedUser: Pick<User, "age"> = {
    age: 20
}