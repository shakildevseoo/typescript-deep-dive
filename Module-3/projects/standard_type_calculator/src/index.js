"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculatorBasic(num1, num2, operation) {
    if (operation === "+") {
        return num1 + num2;
    }
    else if (operation === "-") {
        return num1 - num2;
    }
    else if (operation === "*") {
        return num1 * num2;
    }
    else if (operation === "/") {
        if (num2 !== 0) {
            return num1 / num2;
        }
        else {
            return "Error: Cannot divide by zero";
        }
    }
    else {
        return "Invalid Operation";
    }
}
console.log(calculatorBasic(20, 40, "+"));
console.log(calculatorBasic(20, 2, "-"));
console.log(calculatorBasic(20, 5, "*"));
console.log(calculatorBasic(20, 2, "/"));
const smartCalculator = (a, b, op) => {
    switch (op) {
        case "add": return a + b;
        case "subtract": return a - b;
        case "multiply": return a * b;
        case "divide": return b !== 0 ? a / b
            : "Error: Cannot divide by zero";
    }
};
console.log(smartCalculator(20, 40, "add"));
console.log(smartCalculator(20, 2, "subtract"));
console.log(smartCalculator(20, 5, "multiply"));
console.log(smartCalculator(20, 2, "divide"));
//# sourceMappingURL=index.js.map