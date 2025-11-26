"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = require("./models/Product");
const apiService_1 = require("./services/apiService");
const errorHandler_1 = require("./utils/errorHandler");
Promise < void  > {
    try: {
        const: productsData = await (0, apiService_1.getAllProducts)(),
        const: firstItem = productsData[0],
        const: product = new Product_1.Product(firstItem.id, firstItem.title, firstItem.price, firstItem.description, firstItem.discountPercentage, firstItem.category),
        console, : .log(product.displayDetails()),
        console, : .log("Final price with discount and tax: ", product.getPriceWithDiscount())
    }, catch(error) {
        (0, errorHandler_1.handleError)(error);
    }
};
start();
//# sourceMappingURL=main.js.map