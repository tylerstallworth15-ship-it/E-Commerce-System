export async function getAllProducts(): Promise<any[]> {
    const response = await fetch("https://dummyjson.com/products");
    if (!response.ok) {
        throw new AppError("Could not get products");
    }
    const data = await response.json();
    return data.products;
}