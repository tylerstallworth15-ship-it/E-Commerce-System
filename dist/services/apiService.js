"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllProducts = getAllProducts;
async function getAllProducts() {
    const response = await fetch("https://dummyjson.com/products");
    if (!response.ok) {
        throw new AppError("Could not get products");
    }
    const data = await response.json();
    return data.products;
}
//# sourceMappingURL=apiService.js.map