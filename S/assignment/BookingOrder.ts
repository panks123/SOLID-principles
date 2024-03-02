import { Customer } from "./Customer";
import { Hotel } from "./Hotel";

export class BookingOrder {
    orderId: string
    roomsForOrder: number
    customer: Customer
    hotel: Hotel

    constructor(roomsForOrder: number,customer: Customer, hotel: Hotel) {
        this.orderId = (Math.random() * 100).toString().replace(".", "") + (Math.random() * 100).toString().replace(".", "") + (Math.random() * 100).toString().replace(".", "");
        this.roomsForOrder = roomsForOrder;
        this.customer = customer;
        this.hotel = hotel;
    }
}