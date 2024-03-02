
export class Hotel {
    name: string
    totalRooms: number
    availableRoomsFOrBooking: number
    eachRoomPrice: number = 1000

    constructor(name: string, totalRooms: number) {
        this.name = name
        this.totalRooms = totalRooms
        this.availableRoomsFOrBooking = totalRooms;
    }

    manageAvailableRoomsAfterBookingOrCheckout(type: "booking" | "checkout", noOfRooms: number){
        if(type === 'booking') this.availableRoomsFOrBooking -= noOfRooms;
        else this.availableRoomsFOrBooking += noOfRooms;
    }

    getNumberOfAvailableRooms() {
        return this.availableRoomsFOrBooking;
    }

    getTotalRooms() {
        return this.totalRooms;
    }
}