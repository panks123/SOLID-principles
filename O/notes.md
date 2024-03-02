# Open-Closed Principle (OCP)

The open–closed principle (OCP) states "software entities (classes, modules, functions, etc.) should be open for extension,
but closed for modification", that is, such an entity can allow its behaviour to be extended without modifying its source code

#### Open for Extension:

You can add new functionality to a class without changing its existing code.

#### Closed for Modification:

Once a class is written and tested, you should not modify its code to add new features.

Example:

```javascript
class PaymentProcessor {
  processPayment(amount: number, paymentType: string) {
    if (paymentType === "paypal") {
      console.log(`Processing payment of ${amount} using Paypal`);
    } else if (paymentType === "creditcard") {
      console.log(`Processing payment of ${amount} using Credit Card`);
    } else {
      throw new Error("Invalid payment method!");
    }
  }
}

const paymentProcessor = new PaymentProcessor();

paymentProcessor.processPayment(10000, "creditcard");
```

Now suppose we want to support paytm as well

then we will be modifying our code as:

```javascript
class PaymentProcessor {
  processPayment(amount: number, paymentType: string) {
    if (paymentType === "paypal") {
      console.log(`Processing payment of ${amount} using Paypal`);
    } else if (paymentType === "creditcard") {
      console.log(`Processing payment of ${amount} using Credit Card`);
    } else if (paymentType === "paytm") {
      console.log(`Processing payment of ${amount} using Paytm`);
    } else {
      throw new Error("Invalid payment method!");
    }
  }
}

const paymentProcessor = new PaymentProcessor();

paymentProcessor.processPayment(10000, "creditcard");
```

If We want to add a new payment type (extension), we would need to modify the existing processPayment method,
which goes against the Open-Closed Principle.

### Solution

```javascript
interface IPaymentProcessor {
  processPayment: (amount: number) => void;
}

class PaymentProcessorr {
  processor: IPaymentProcessor;

  constructor(processor: IPaymentProcessor) {
    this.processor = processor;
  }

  processPayment(amount: number) {
    this.processor.processPayment(amount);
  }
}

class CreditCardPaymentProcessor implements IPaymentProcessor {
  processPayment(amount: number) {
    console.log(`Processing payment of ${amount} using Credit Card`);
  }
}
class PaypalPaymentProcessor implements IPaymentProcessor {
  processPayment(amount: number) {
    console.log(`Processing payment of ${amount} using Paypal`);
  }
}
class PaytmPaymentProcessor implements IPaymentProcessor {
  processPayment(amount: number) {
    console.log(`Processing payment of ${amount} using Paytm`);
  }
}

const creditCardProcessor = new CreditCardPaymentProcessor();

const processor = new PaymentProcessorr(creditCardProcessor);
processor.processPayment(1000);

const paytmProcessor = new PaytmPaymentProcessor();
const processr2 = new PaymentProcessorr(paytmProcessor);
processr2.processPayment(2345);

const paypalProcessor = new PaypalPaymentProcessor();
const processr3 = new PaymentProcessorr(paypalProcessor);
processr3.processPayment(7676);
```

This code now adheres to the Open-Closed Principle(OCP).

By introducing the `IPaymentProcessor` interface and having different payment processor classes implement it,
we are allowing for easy extension without modifying the existing PaymentProcessor class.

Here are the key points that make this code follow the OCP::

1. Interface `IPaymentProcessor`:

   - It declares the method processPayment, providing a contract that concrete payment processor classes must implement.

2. Payment Processor Classes:

   - `CreditCardPaymentProcessor`, `PaypalPaymentProcessor`, and `PaytmPaymentProcessor` each implement the `IPaymentProcessor` interface. They encapsulate the payment processing logic.

3. PaymentProcessor Class:

   - Accepts any class that implements IPaymentProcessor through its constructor.
   - Calls the processPayment method on the provided processor.

4. Usage:
   - Create instances of different payment processors (CreditCardPaymentProcessor, PaypalPaymentProcessor, etc.)
     and pass them to the PaymentProcessor class without modifying the existing code.

This design allows you to add new payment processor classes in the future without altering the PaymentProcessor class,
making it more compliant with the Open-Closed Principle.
