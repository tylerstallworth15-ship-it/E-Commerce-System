import { calculateDiscount } from "../utils/discountCalculator";
import { calculateTax } from "../utils/taxCalculator";


export class Product {
    id: number;
    name: string;
    price: number;
    description: string;
    discountPercentage: number;
    category: string;

    constructor(
        id: number,
        name: string,
        price: number,
        description: string,
        discountPercentage: number,
        category: string,
    ) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.discountPercentage = discountPercentage;
        this.category = category;
    }

    displayDetails(): string{
        const displayItem =
        "Product: " + this.name +
        " | Price: $" + this.price +
        " | Discount: " + this.discountPercentage +
        " | Category: " + this.category +
        " | Description: " + this.description;
        return displayItem;
    }

    getPriceWithDiscount(): number {
        const discountAmount = calculateDiscount(this.price, this.discountPercentage);
        const taxAmount = calculateTax(this.price, this.category);
        const finalPrice = this.price - discountAmount + taxAmount;
        return finalPrice; 
    }
}
