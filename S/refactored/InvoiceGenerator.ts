import { Product } from "../Order";

export class InvoiceGenerator {
    generateInvoice(products: Product[], totalAmount: number) {
      console.log("\n\n");
      console.log("============ Invoice ===========\n");
      console.log("Invoice Date: \t", new Date().toDateString());
      console.log("Product Name\t\tPrice");
      console.log("-------------------------------");
  
      // Display product details
      products.forEach((product) => {
        console.log(`${product.name}\t\t${product.price.toFixed(2)}`);
      });
  
      console.log("-------------------------------");
  
      console.log(`Total\t\t\t${totalAmount}`);
    }
}