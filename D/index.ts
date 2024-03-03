// Consider a scenario without following DIP:

class LightSwith {
    
    constructor(private bulb: IncandescentBulb ) {} // Dependency on specific implementation (IncandescentBulb)

    toggle() {
        this.bulb.turnOnOrOff(); 
    }
}

// Low-level module (Specific Implementation)
class IncandescentBulb {
    turnOnOrOff() {
        console.log("IncandescentBulb is turned ON or OFF");
    }
}

const bulb = new IncandescentBulb();

const lightSwitch = new LightSwith(bulb);
lightSwitch.toggle();

// Now Suppose in future we want to replace IncandescentBulb with LEDBulb

class LEDBulb {
    turnOnOrOff() {
        console.log("LEDBulb is turned ON or OFF");
    }
}

// But as our LightSwitch class depends on low level implementation i.e. IncandescentBulb
//  So we will have to refactor the LightSwitch class as well

// So this is a problem as it is not following DIP