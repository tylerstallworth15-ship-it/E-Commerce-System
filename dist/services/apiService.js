"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllProducts = getAllProducts;
const errorHandler_1 = require("../utils/errorHandler");
async function getAllProducts() {
    const response = await fetch("https://dummyjson.com/products");
    if (!response.ok) {
        throw new errorHandler_1.AppError("Could not get products");
    }
    const data = await response.json();
    return data.products;
}
