"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const discountCalculator_1 = require("../utils/discountCalculator");
const taxCalculator_1 = require("../utils/taxCalculator");
class Product {
    constructor(id, name, price, description, discountPercentage, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.discountPercentage = discountPercentage;
        this.category = category;
    }
    displayDetails() {
        const displayItem = "Product: " + this.name +
            " | Price: $" + this.price +
            " | Discount: " + this.discountPercentage +
            " | Category: " + this.category +
            " | Description: " + this.description;
        return displayItem;
    }
    getPriceWithDiscount() {
        const discountAmount = (0, discountCalculator_1.calculateDiscount)(this.price, this.discountPercentage);
        const taxAmount = (0, taxCalculator_1.calculateTax)(this.price, this.category);
        const finalPrice = this.price - discountAmount + taxAmount;
        return finalPrice;
    }
}
exports.Product = Product;
