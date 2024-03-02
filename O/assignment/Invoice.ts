import { Product } from "./Product";

interface IInvoiceStategy {
    generateInvoice: (products: Product[], amount: number) => void
}

export class Invoice {
    invoiceGenerator: IInvoiceStategy
    
    constructor(invoiceGenerator: IInvoiceStategy) {
        this.invoiceGenerator= invoiceGenerator
    }

    generateInvoice(products: Product[], amount: number){
        this.invoiceGenerator.generateInvoice(products, amount)
    }
}

export class BreifInvoiceGenerator implements IInvoiceStategy {
    generateInvoice(products: Product[], amount: number){

        console.log("\n\n")
        console.log('============ Brief Invoice ===========\n');
        console.log("Invoic Date: \t", new Date().toDateString(),'\n');
        console.log('-------------------------------');
        console.log("No. of products\t\t",products.length);
        console.log('-------------------------------');
        console.log("Order Total:\t\t", amount);
        console.log('-------------------------------');
    }
}

export class DetailedInvoiceGenerator implements IInvoiceStategy {
    generateInvoice(products: Product[], amount: number){

        console.log("\n\n")
        console.log('============ Detailed Invoice ===========\n');
        console.log("Invoic Date: \t", new Date().toDateString(), "\n");
        console.log('Product Name\t\tPrice');
        console.log('-------------------------------');

        // // Display product details
        products.forEach(product => {
            console.log(`${product.name}\t\t${product.price.toFixed(2)}`);
        });

        console.log('-------------------------------');
        console.log(`Total\t\t\t${amount}`);
        console.log('-------------------------------');
    }
}