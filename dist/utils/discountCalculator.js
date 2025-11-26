"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateDiscount = calculateDiscount;
function calculateDiscount(price, discountPercentage) {
    const discountAmount = (price * discountPercentage) / 100;
    return discountAmount;
}
//# sourceMappingURL=discountCalculator.js.map