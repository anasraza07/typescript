"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const calculator_1 = require("./calculator");
const greet_1 = __importDefault(require("./greet"));
console.log((0, calculator_1.add)(2, 2));
console.log((0, calculator_1.sub)(4, 2));
console.log((0, calculator_1.mul)(2, 0));
console.log((0, greet_1.default)("Anas"));
//# sourceMappingURL=main.js.map