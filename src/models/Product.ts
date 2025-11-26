import { calculateDiscount } from "../utils/discountCalculator";

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

    getPricesWithDiscount(): number {
        const discountAmount = (this.price * this.discountPercentage) / 100;
        const finalPrice = this.price - discountAmount;
        return finalPrice; 
    }
}
