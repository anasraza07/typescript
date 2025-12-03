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
// console.log(customer?.birthday?.getFullYear());

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
// wrap("Anas");
// wrap(true);

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


// *********** //
// FREECODECAMP
// console.log(Math.floor(13.29))

// type annotations with objects:
let personExOne: {
    name: string
    age: number
    jobTitle?: string
    address: {
        street: string
        city: string
    }
};
personExOne = {
    name: "Alice",
    age: 10,
    address: {
        street: "123",
        city: "wonder land"
    }
}

let personExTwo: {
    name: string
    age: number
    jobTitle?: string
    address: {
        street: string
        city: string
    }
} = {
    name: "Alice",
    age: 10,
    address: {
        street: "123",
        city: "wonder land"
    }
}

// rest parameter:
function addAll(...nums: number[]): number {
    let result = 0;

    for (const n of nums) {
        result += n;
    }

    return result;
}
// console.log(addAll(1, 2, 3, 4, 5, 6, +true))
// console.log(addAll());

// arrow function:
const addWithArrow = (num1: number, num2: number): number => num1 + num2;


// anonymous function:
const add = function (num1: number, num2: number): number {
    return num1 + num2;
}
// console.log(add(10, 20)) // output: 30

// type annotation with multidimensional arrays
let arrayThree: (string | number)[] = [1, 2, 3, "A", "B", "C"]

// tuple:
let article: readonly [number, string, boolean] = [11, "Title One", true]
article = [12, "Title two", false];

const [id, title, published] = article;

// console.log(article);
// console.log(id, title, published)

// interfaces:
interface PersonEx2 {
    name: string,
    age: number,
    greet(msg: string): void;
}
const ali: PersonEx2 = {
    name: "Ali",
    age: 30,
    greet(msg: string) {
        // console.log(`${this.name} says: ${msg}`)
    }
}
ali.greet("Hello typescript!");

// type & interface differences
interface AnimalInterfaceEx {
    type: string
}
interface Dog extends AnimalInterfaceEx {
    bark(): void
}

type AnimalTypeEx = {
    type: string
}
type Monkey = AnimalTypeEx & {
    bark(): void
}


// class type annotations
class Product {
    id: number;
    name: string;
    price: number

    constructor(id: number, name: string, price: number) {
        this.id = id,
            this.name = name,
            this.price = price
    }

    getProductInfo(): string {
        return `ID: ${this.id}, Name: ${this.name}, Price: ${this.price}`
    }
}
const productOne = new Product(1, "Widget", 20.0)
console.log(productOne.getProductInfo())    