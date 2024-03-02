import { Product, Order } from "./Order";

const product1 = new Product("1", "Product 1", 100);
const product2 = new Product("2", "Product 1", 200);
const product3 = new Product("3", "Product 1", 300);


const order = new Order();

order.addProducts(product1);
order.addProducts(product2);
order.addProducts(product3);

order.processPayment();
order.generateInvoice();
