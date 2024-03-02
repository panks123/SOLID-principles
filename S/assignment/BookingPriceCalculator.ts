
export class BookingPriceCalculator {
    calculateBookingPrice (rooms: number, eachRoomPrice: number) {
        return rooms * eachRoomPrice
    }
}