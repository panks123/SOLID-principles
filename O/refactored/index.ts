interface IPaymentProcessor {
    processPayment: (amount: number) => void
}

class PaymentProcessorr {
    processor: IPaymentProcessor

    constructor(processor: IPaymentProcessor) {
        this.processor = processor;
    }
    
    processPayment(amount:number) {
        this.processor.processPayment(amount);
    }
    
}

class CreditCardPaymentProcessor implements IPaymentProcessor{
    processPayment(amount: number){
        console.log(`Processing payment of ${amount} using Credit Card`)
    }
}
class PaypalPaymentProcessor implements IPaymentProcessor{
    processPayment(amount: number){
        console.log(`Processing payment of ${amount} using Paypal`)
    }
}
class PaytmPaymentProcessor implements IPaymentProcessor{
    processPayment(amount: number){
        console.log(`Processing payment of ${amount} using Paytm`)
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