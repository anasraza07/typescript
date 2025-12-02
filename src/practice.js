var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
// console.log(productOne.name, productOne.price)
// console.log(productTwo.name, productTwo.price)
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
salary(50000);
// 7:
var id = 10;
id = "10";
var firstEmployee = {
    name: "Ali",
    age: 20,
    company: "Xeverse",
    salary: 90000,
    title: "Developer",
    isFulltime: false
};
// 8:
var buttonType = "primary";
var themeType = "dark";
var statusType = "error";
var r = 2 /* Role.GUEST */;
var s = 0 /* Status.Processing */;
function log(level, message) {
    switch (level) {
        case "info" /* LogLevel.INFO */:
            console.info("[INFO]: ".concat(message));
            break;
        case "debug" /* LogLevel.DEBUG */:
            console.info("[DEBUG]: ".concat(message));
            break;
        case "warn" /* LogLevel.WARN */:
            console.info("[WARN]: ".concat(message));
            break;
        case "error" /* LogLevel.ERROR */:
            console.info("[ERROR]: ".concat(message));
            break;
        default:
            console.log(message);
    }
}
function RecipeCard(props) {
    return props.likes;
}
var myEmployee = {
    name: "Ali",
    age: 20,
    salary: 40000,
};
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
function identity(arg) {
    return arg;
}
// console.log(identity(123));
function processArr(arr) {
    console.log("Length:", arr.length);
    return arr.map(function (item) { return item; });
}
// 13: Generic Constraints
function getLength(item) {
    return item.length;
}
getLength([1, 2, 4]);
// getLength(true); // error
function processObj(obj) {
    console.log("Object:", obj);
}
processObj({ a: 1, b: 2 });
processObj([]);
// processObj(123);
function printLength(data) {
    console.log("Length", data.length);
}
printLength("hello");
printLength([1, 2, 3]);
var u = {
    name: "Anas"
};
var selectName = {
    name: "anasraza"
};
var OmitAge = {
    name: "ali"
};
// 15: Type Narrowing & Type Guards
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
// printUser({ name: "anasraza", role: "Admin" });
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
var person = { name: "anas", email: "ar@ar.com" };
function fetchUser() {
    return __awaiter(this, void 0, void 0, function () {
        var res, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("https://jsonplaceholder.typicode.com/users/1")];
                case 1:
                    res = _a.sent();
                    return [4 /*yield*/, res.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
fetchUser().then(function (u) { return console.log(u); });
