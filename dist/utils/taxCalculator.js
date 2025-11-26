"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateTax = calculateTax;
function calculateTax(price, category) {
    let taxRate = 0.0475;
    if (category === "groceries") {
        taxRate = 0.03;
    }
    const taxAmount = price * taxRate;
    return taxAmount;
}
