import { Order} from "./Order";
import { Product } from "./Product";
import { OrderPricing } from "./OrderPricing";
import { BreifInvoiceGenerator, DetailedInvoiceGenerator, Invoice } from "./Invoice";

const product1 = new Product("1", "Product 1", 100);
const product2 = new Product("2", "Product 1", 200);
const product3 = new Product("3", "Product 1", 300);

const order = new Order();

order.addProducts(product1);
order.addProducts(product2);
order.addProducts(product3);

const orderProucts = order.getProducts();

const orderPricing = new OrderPricing()

const totalOrderAmount = orderPricing.calculatePricing(orderProucts);

const breifInvoiceGenerator = new BreifInvoiceGenerator(); 
const invoiceGenerator1 = new Invoice(breifInvoiceGenerator);
invoiceGenerator1.generateInvoice(orderProucts, totalOrderAmount);
console.log("\n")
console.log("============================")
const detailedInvoiceGenerator = new DetailedInvoiceGenerator(); 
const invoiceGenerator2 = new Invoice(detailedInvoiceGenerator);
invoiceGenerator2.generateInvoice(orderProucts, totalOrderAmount);
