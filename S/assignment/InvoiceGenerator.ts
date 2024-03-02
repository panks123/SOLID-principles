import { BookingOrder } from "./BookingOrder";
import { Customer } from "./Customer";
import { Hotel } from "./Hotel";

export class InvoiceGenerator {
    generateInvoice (customerName: string,customerEmail: string, hotelName: string, orderId: string,totalRoomsBooked: number, totalAmount:number) {
        console.log("\n\n");
        console.log("============ Invoice ===========\n");
        console.log("Invoice Date: \t", new Date().toDateString());
        console.log("Hotel :", hotelName);
        console.log("Customer name:", customerName , "    |    ", "Customer Email: ", customerEmail)
        console.log("\n\n");
        console.log("Order id: ", orderId);
        console.log("Total Rooms Booked:: \t\t", totalRoomsBooked);
        console.log("-------------------------------");
        console.log("Total Order Amount:: \t\t", totalAmount);
    }
}