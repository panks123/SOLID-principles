import { BookingOrder } from "./BookingOrder";
import { BookingPriceCalculator } from "./BookingPriceCalculator";
import { Customer } from "./Customer";
import { Hotel } from "./Hotel";
import { InvoiceGenerator } from "./InvoiceGenerator";
import { PaymentProcessor } from "./PaymentProcessor";

const hotel1 = new Hotel("Hotel Grand", 10);
const paymentProcessor = new PaymentProcessor();
const bookingPriceCalculator = new BookingPriceCalculator();
const invoiceGenerator = new InvoiceGenerator();

const customer1 = new Customer("Pankaj1", "pankaj1@email.com", "012346789");

const availableRoomsFOrBooking = hotel1.getNumberOfAvailableRooms();
const noOfRoomsRequestedForBooking1 = 2
if(noOfRoomsRequestedForBooking1 <= availableRoomsFOrBooking) {
    const bookingOrder1 = new BookingOrder(noOfRoomsRequestedForBooking1, customer1, hotel1);
    const orderAmount1 = bookingPriceCalculator.calculateBookingPrice(noOfRoomsRequestedForBooking1, hotel1.eachRoomPrice);
    paymentProcessor.processPayment(orderAmount1);
    invoiceGenerator.generateInvoice(customer1.name, customer1.email, hotel1.name, bookingOrder1.orderId,noOfRoomsRequestedForBooking1, orderAmount1);
    hotel1.manageAvailableRoomsAfterBookingOrCheckout("booking", noOfRoomsRequestedForBooking1);
}

console.log("====================================");

console.log("Total rooms::\t", hotel1.totalRooms);
console.log("Available rooms::\t", hotel1.availableRoomsFOrBooking);


const customer2 = new Customer("Pankaj2", "pankaj2@email.com", "2346789");
const availableRoomsFOrBooking2 = hotel1.getNumberOfAvailableRooms();
const noOfRoomsRequestedForBooking2 = 3;
if(noOfRoomsRequestedForBooking2 <= availableRoomsFOrBooking2) {
    const bookingOrder2 = new BookingOrder(noOfRoomsRequestedForBooking2, customer2,hotel1);
    const orderAmount2 = bookingPriceCalculator.calculateBookingPrice(noOfRoomsRequestedForBooking2, hotel1.eachRoomPrice);
    paymentProcessor.processPayment(orderAmount2);
    // invoiceGenerator.generateInvoice(customer2,hotel1, bookingOrder2, orderAmount2);
    invoiceGenerator.generateInvoice(customer2.name, customer2.email, hotel1.name, bookingOrder2.orderId,noOfRoomsRequestedForBooking2, orderAmount2);
    hotel1.manageAvailableRoomsAfterBookingOrCheckout("booking", noOfRoomsRequestedForBooking1);
}

console.log("====================================");

console.log("Total rooms::\t", hotel1.totalRooms);
console.log("Available rooms::\t", hotel1.availableRoomsFOrBooking);

// const customer3 = new Customer("Pankaj3", "pankaj3@email.com", "346789");
