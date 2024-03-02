class PaymentProcessor {
    processPayment(amount: number, paymentType: string) {
        if(paymentType === "paypal"){
            console.log(`Processing payment of ${amount} using Paypal`)
        }
        else if(paymentType === "creditcard"){
            console.log(`Processing payment of ${amount} using Credit Card`)
        }
        else {
            throw new Error("Invalid payment method!")
        }
    }
}

const paymentProcessor = new PaymentProcessor();

paymentProcessor.processPayment(10000, 'creditcard');