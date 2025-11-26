import
import
import

async function start(); Promise<void> {
    try {
        const productsData = await getAllProducts();

        const firstItem = productsData[0];

        const product = new Product(
            firstItem.id,
            firstItem.title,
            firstItem.price,
            firstItem.description,
            firstItem.discountPercentage,
            firstItem.category
        );

        console.log(product.displayDetails());
        console.log("Final price with discount and tax: " product.getPriceWithDiscount());
    }   catch (error) {
        handleError(error);
    }
}