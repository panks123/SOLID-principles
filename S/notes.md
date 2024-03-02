# SOLID Principles

## S - Single responsibility principle (SRP)

The Single Responsibility Principle (SRP) is one of the SOLID principles in object-oriented design,
and it states that a class should have only one reason to change.
In simpler terms, a class should have only one job or responsibility.
i.e.
Gather together the things that change for the same reasons.
And Separate those things that change for different reasons.".

#### One Job:

Each class should focus on doing just one thing or having one responsibility. This makes the class more focused and easier to understand.

Reason to Change:

If a class has more than one responsibility and something needs to change,
it becomes challenging to predict the impact of that change.
By having a single responsibility, changes are localized.

When a class has a single responsibility, it means that the class is designed to handle only one specific aspect or behavior.
If there's a need to make a change related to that specific responsibility, the modifications are confined to that class.
Other parts of the system that don't rely on or interact with that responsibility remain unaffected.

Example::

```javascript
export class Product {
  id: string;
  name: string;
  price: number;
  constructor(id: string, name: string, price: number) {
    this.id = id;
    this.name = name;
    this.price = price;
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
    this.products = this.products.filter((product) => product.id !== productId);
  }

  calculatePricing() {
    return this.products.reduce((total, product) => {
      return total + product.price;
    }, 0);
  }

  generateInvoice() {
    console.log("\n\n");
    console.log("============ Invoice ===========\n");
    console.log("Invoic Date: \t", new Date().toDateString());
    console.log("Product Name\t\tPrice");
    console.log("-------------------------------");

    // Display product details
    this.products.forEach((product) => {
      console.log(`${product.name}\t\t${product.price.toFixed(2)}`);
    });

    console.log("-------------------------------");

    console.log(`Total\t\t\t${this.calculatePricing()}`);
  }

  processPayment() {
    console.log("Processing payment!");
    console.log("Payment successful!");
    console.log("Adding to accounting system!");
    console.log("Email sent to customer!");
  }
}
```

In the above code, the Single Responsibility Principle is not strictly followed in the Order class.
The Order class is responsible for managing products, calculating pricing, generating invoices, and processing payments.

Identifying Seprate responsiblities in (currently in Order class)

1. `Responsibility 1:` Managing Products:

The Order class is responsible for managing products (addProducts, getProducts, removeProduct).

2. `Responsibility 2:` Calculating Pricing:

The Order class calculates pricing (calculatePricing).

3. `Responsibility 3:` Generating Invoice:

The Order class generates an invoice (generateInvoice).

4. `Responsibility 4:` Processing Payment:

The Order class processes payments (processPayment).

## Refactoring to Adhere to Single responsibility principle

```javascript
// Product.ts
export class Product {
  id: string;
  name: string;
  price: number;

  constructor(id: string, name: string, price: number) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

// Order.ts
export class Order {
  products: Product[] = [];

  addProducts(product: Product) {
    this.products.push(product);
  }

  getProducts() {
    return this.products;
  }

  removeProduct(productId: string) {
    this.products = this.products.filter((product) => product.id !== productId);
  }
}

// OrderPricing.ts
export class OrderPricing {
  calculatePricing(products: Product[]): number {
    return products.reduce((total, product) => total + product.price, 0);
  }
}

// InvoiceGenerator.ts
export class InvoiceGenerator {
  generateInvoice(products: Product[], calculatePricing) {
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

    console.log(`Total\t\t\t${calculatePricing(products)}`);
  }
}

// PaymentProcessor.ts
export class PaymentProcessor {
  processPayment(amount: number) {
    console.log(`Processing payment for amount ${amount}!`);
    console.log(`Payment successful for amount ${amount}!`);
    console.log(`Adding to accounting system!`);
    console.log(`Email sent to customer!`);
  }
}

// index.ts
import { Order } from "./Order";
import { Product } from "./Product";
import { OrderPricing } from "./OrderPricing";
import { PaymentProcessor } from "./PaymentProcessor";
import { InvoiceGenerator } from "./InvoiceGenerator";

const product1 = new Product("1", "Product 1", 100);
const product2 = new Product("2", "Product 1", 200);
const product3 = new Product("3", "Product 1", 300);

const order = new Order();

order.addProducts(product1);
order.addProducts(product2);
order.addProducts(product3);

const orderProucts = order.getProducts();

const orderPricing = new OrderPricing();

const totalOrderAmount = orderPricing.calculatePricing(orderProucts);

const paymentProcessor = new PaymentProcessor();
paymentProcessor.processPayment(totalOrderAmount);

const invoiceGenerator = new InvoiceGenerator();
invoiceGenerator.generateInvoice(orderProucts, totalOrderAmount);
```

In this refactoring:

`Order class` focuses on managing products.
`OrderPricing class` is responsible for calculating pricing.
`InvoiceGenerator class` is responsible for generating invoices.
`PaymentProcessor class` is responsible for processing payments.

Each class now has a single responsibility, making the code more modular and adhering to the Single Responsibility Principle.
This separation of concerns allows for easier maintenance and scalability.
