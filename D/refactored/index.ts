interface Bulb {
    turnOnOrOff() : void
}

class LightSwitch {
    constructor (private bulb: Bulb) { } // // Dependency on abstraction (Bulb interface)

    toggle() {
        this.bulb.turnOnOrOff();
    }
}

class IncandescentBulbb implements Bulb { // implements same interface
    turnOnOrOff() {
        console.log("IncandescentBulbb is turned ON or OFF")
    }
}

// const bulbb = new IncandescentBulbb();

// Now suppose we want to replace IncandescentBulbb with LEDBulbb
class LEDBulbb implements Bulb {
    turnOnOrOff() {
        console.log("LEDBulbb is turned ON or OFF");
    }
}

const bulbb = new LEDBulbb();

const lightSwitchh = new LightSwitch(bulbb);
lightSwitchh.toggle();

// We can see that we easily replaced IncandescentBulbb with LEDBulbb and we don't have to refactor the LightSwitchh class 
// This is because The code is following DIP