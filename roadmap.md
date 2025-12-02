⭐ COMPLETE TYPESCRIPT ROADMAP – 20 STEPS

for frontend intern roles

STEP 1 — What is TypeScript? Kyun seekhna chahiye? + Setup
🔥 Concept:

TypeScript = JavaScript + Types

Strict code, fewer bugs, readable code

React + TS is standard in companies.

🛠 Setup:

VS Code install karo

npm install -g typescript

File: index.ts

Compile: tsc index.ts ⇒ output: index.js

🧩 Code Example:
let age: number = 22;
let name: string = "Anas";
let isDev: boolean = true;

✅ Mini Assignments (Step 1)

Ek TS file banao and 3 variables alag-alag types ke define karo.

TS file ko JS me convert karo using tsc.

Console me output print karo (console.log).

▶️ Video Resource:

TypeScript Crash Course (Traversy):
https://youtu.be/BCg4U1FzODs

STEP 2 — Basic Types
📌 Learn:

number, string, boolean

any (avoid)

unknown

null, undefined

🧩 Example:
let score: number = 100;
let userName: string = "Anas";
let isOnline: boolean = false;

let anything: any = "test"; // avoid
let maybe: unknown = 10;    // safer than any

✅ Mini Assignments (Step 2)

5 variables banao different data types ke.

unknown type me ek value store karo and type check karke use karo.

any type ka misuse example banao (learning ke liye).

▶️ Video:

TypeScript in 1 Hour:
https://youtu.be/d56mG7DezGs

STEP 3 — Arrays & Tuples
📌 Arrays:
let fruits: string[] = ["apple", "banana"];
let numbers: number[] = [1, 2, 3];

📌 Tuples:

Fixed type + fixed order

let user: [string, number] = ["Anas", 22];

✅ Mini Assignments

Number array banao and squares print karo.

Tuple banao jisme name + age ho.

Ek string array banao and kisi index per update karo.

▶️ Video:

https://youtu.be/ahCwqrYpIuM

STEP 4 — Type Aliases

Code reusable banane ke liye.

type User = {
  name: string;
  age: number;
};

let u1: User = { name: "Anas", age: 22 };

Assignments:

Product type banao.

2 product objects banao.

Print full details.

STEP 5 — Functions With Types
function sum(a: number, b: number): number {
  return a + b;
}

function log(msg: string): void {
  console.log(msg);
}

Assignments:

Multiply function.

String return karne wali greet function.

Boolean return function.

STEP 6 — Optional & Default Params
function greet(name: string = "Guest") {
  console.log("Hello " + name);
}

function printUser(name: string, age?: number) {}

Assignments:

Default age ke saath function.

Optional salary param.

Function jo 2 params required + 1 optional le.

STEP 7 — Union & Intersection Types
📌 Union:
let id: string | number = 10;
id = "abc";

📌 Intersection:
type A = { name: string };
type B = { age: number };
type C = A & B;

Assignments:

ID type union banao.

API Response type union.

Intersection type banao for Person + Job.

STEP 8 — Literal Types
let direction: "left" | "right" = "left";

Assignments:

Button type: "primary" | "secondary".

Theme type: "dark" | "light".

Status type: "success" | "error" | "loading".

STEP 9 — Enums
enum Role {
  ADMIN,
  USER,
  GUEST,
}

let r: Role = Role.ADMIN;

Assignments:

User role enum.

Order status enum.

Log function based on enum.

STEP 10 — Interfaces (Very Important for React)
interface User {
  name: string;
  age: number;
  isAdmin?: boolean;
}

Assignments:

Product interface.

BlogPost interface.

React props interface banao (title, content).

STEP 11 — Interface vs Type

type = more flexible

interface = extend karna easy

Assignments:

Interface extend example banao.

Type alias + union.

Type vs interface example rewrite.

STEP 12 — Generics Basics
function wrap<T>(value: T) {
  return value;
}

const x = wrap<number>(10);
const y = wrap<string>("hello");

Assignments:

Generic function identity.

Generic array function.

Generic interface banao.

STEP 13 — Generic Constraints
function getLength<T extends { length: number }>(item: T) {
  return item.length;
}

Assignments:

Length constraint.

Object constraint.

Extend constraint.

STEP 14 — Utility Types (React me bahut use hote)

Partial

Required

Pick

Omit

Readonly

type User = { name: string; age: number };

let u: Partial<User> = { name: "Anas" };

Assignments:

Partial ka example.

Pick se sirf name lo.

Omit se age hatao.

STEP 15 — Narrowing & Type Guards
function printID(id: string | number) {
  if (typeof id === "string") console.log(id.toUpperCase());
  else console.log(id);
}

Assignments:

typeof narrowing.

in-operator narrowing.

custom type guard.

STEP 16 — Classes & OOP Basics
class User {
  constructor(public name: string, private age: number) {}
}

Assignments:

Car class banao.

Bank account class.

Getters/setters use karo.

STEP 17 — Modules & Imports
export const sum = (a: number, b: number) => a + b;
import { sum } from "./math";

Assignments:

2 files banao and export/import karo.

Default export example.

Multiple exports example.

STEP 18 — Handling API Responses (Frontend me required)
interface User {
  id: number;
  name: string;
}

async function fetchUser(): Promise<User> {}

Assignments:

API response interface.

Fetch + parse example.

Promise return type.

STEP 19 — React + TypeScript Essentials

Props types

Children type

Event types (onClick, onChange)

useState types

interface Props {
  title: string;
}

function Button({ title }: Props) {
  return <button>{title}</button>;
}

Assignments:

Button props interface.

Input event type.

useState with type.

STEP 20 — Final Projects (Intern Level)
🎯 Projects:

Todo App (TS + React)

API Dashboard (Fetch + Types)

Reusable Components Library (Buttons, Cards)