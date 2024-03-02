export class Product {
    id: string;
    name: string;
    price: number;
    constructor(id: string, name: string, price: number) {
        this.id= id;
        this.name= name;
        this.price= price;
    }
}


export class Order {
    products: Product[] = [];

    addProducts(product: Product) {
        this.products.push(product);
    }

    getProducts() {
        return this.products;
    }

    removeProduct(productId: string) {
        this.products= this.products.filter(product => product.id !== productId );
    }

    calculatePricing() {
        return this.products.reduce((total, product) => {return (total + product.price) }, 0);
    }

    generateInvoice() {

        console.log("\n\n")
        console.log('============ Invoice ===========\n');
        console.log("Invoic Date: \t", new Date().toDateString());
        console.log('Product Name\t\tPrice');
        console.log('-------------------------------');

        // Display product details
        this.products.forEach(product => {
            console.log(`${product.name}\t\t${product.price.toFixed(2)}`);
        });

        console.log('-------------------------------');

        console.log(`Total\t\t\t${this.calculatePricing()}`);
    }

    processPayment() {
        console.log("Processing payment!")
        console.log("Payment successful!");
        console.log("Adding to accounting system!");
        console.log("Email sent to customer!");
    }
}
