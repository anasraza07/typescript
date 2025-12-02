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
// console.log(productOne.name, productOne.price)
// console.log(productTwo.name, productTwo.price)

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

type Person = {
    name: string,
    age: number
}

type Job = {
    company: string,
    title: string,
    salary: number
    isFulltime: boolean
}

type Employee = Person & Job;
const firstEmployee: Employee = {
    name: "Ali",
    age: 20,
    company: "Xeverse",
    salary: 90_000,
    title: "Developer",
    isFulltime: false
}

// 8:
let buttonType: "primary" | "secondary" = "primary";
let themeType: "dark" | "light" = "dark";
let statusType: "success" | "error" | "loading" = "error";

// 9:
const enum Role { ADMIN, USER, GUEST }
let r: Role = Role.GUEST;
// console.log("r is", r); // for readable output use union types

const enum Status { "Processing", "Shipped", "Delivered", "Cancelled" }
let s: Status = Status.Processing;

const enum LogLevel {
    INFO = "info",
    DEBUG = "debug",
    WARN = "warn",
    ERROR = "error"
}

function log(level: LogLevel, message: string): void {
    switch (level) {
        case LogLevel.INFO:
            console.info(`[INFO]: ${message}`);
            break;
        case LogLevel.DEBUG:
            console.info(`[DEBUG]: ${message}`)
            break;
        case LogLevel.WARN:
            console.info(`[WARN]: ${message}`)
            break;
        case LogLevel.ERROR:
            console.info(`[ERROR]: ${message}`)
            break;

        default:
            console.log(message);
    }
}
// log(LogLevel.ERROR, "user not found.")

// 10: Interfaces 
interface Product1 {
    name: string,
    price: number,
    categories?: string[],
}
interface BlogPost {
    imageLink: string,
    title: string,
    Description: string,
    createdAt: Date,
}

interface RecipeCardProps {
    name: string,
    likes: number,
    instructions: string,
}
function RecipeCard(props: RecipeCardProps) {
    return props.likes
}

// 11: Interface vs Type
interface Person2 {
    name: string,
    age: number,
}

interface Employee2 extends Person2 {
    salary: number
}

const myEmployee: Employee2 = {
    name: "Ali",
    age: 20,
    salary: 40_000,
}
// console.log(myEmployee);

type Status2 = "SUCCESS" | "FAILED" | "PENDING";
// let st: Status2 = "PENDING"

// it will show compilation error:
/* type sampleObj = {
    name: string
}
type sampleObj = {
    age: number
} */

// not showing any error
/* interface sampleObj {
    name: string
}
interface sampleObj {
    age: number
} */

// 12: Generics Basics
function identity<T>(arg: T) {
    return arg;
}
// console.log(identity(123));
function processArr<T>(arr: T[]): T[] {
    console.log("Length:", arr.length);
    return arr.map(item => item);
}
// console.log(processArr([1, 2, 3, 4]));
// console.log(processArr<number>([1, 2, 3, 4]));

interface Box<T> {
    content: T,
    name: string,
    open: () => void,
    close: () => void,
}

// 13: Generic Constraints
function getLength<T extends { length: number }>(item: T) {
    return item.length;
}
getLength([1, 2, 4]);
// getLength(true); // error

function processObj<T extends object>(obj: T): void {
    console.log("Object:", obj)
}
processObj({ a: 1, b: 2 });
processObj([]);
// processObj(123);

function printLength<T extends string | any[]>(data: T) {
    console.log("Length", data.length);
}
printLength("hello")
printLength([1, 2, 3]);
// printLength(123); // error

// 14: Utility Types
type User = {
    name: string,
    age: number
}
let u: Partial<User> = {
    name: "Anas"
}
let selectName: Pick<User, "name"> = {
    name: "anasraza"
}
let OmitAge: Omit<User, "age"> = {
    name: "ali"
}

// 15: Type Narrowing & Type Guards
function printID(id: string | number) {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    } else {
        console.log(id.toFixed(2));
    }
}
// printID(123)

type User2 = { name: string, email: string }
type Admin = { name: string, role: "Admin" }

function printUser(u: User2 | Admin) {
    if ("email" in u) {
        console.log(u.email)
    } else {
        console.log(u.role)
    }
}
// printUser({ name: "anasraza", role: "Admin" });

function isUser(u: User2 | Admin): u is User2 {
    return "email" in u;
}

function printInfo(person: User2 | Admin) {
    if (isUser(person)) {
        console.log(person.email)
    } else {
        console.log(person.role)
    }
}

let person: User2 | Admin = { name: "anas", email: "ar@ar.com" };
// printInfo(person);

// 18: API Response
interface User3 {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo: {
            lat: string,
            lng: string
        }
    },
    phone: string,
    website: string,
    company: {
        name: string,
        catchPhrase: string,
        bs: string
    }
}

async function fetchUser(): Promise<User3 | null> {
    try {
        const res = await fetch(
            "https://jsonplaceholder.typicode.com/users/1"
        );
        if (!res.ok) {
            return null
        }
        const data: User3 = await res.json();
        return data;
    } catch (error) {
        return null;
    }

}
// fetchUser().then(u => console.log(u))