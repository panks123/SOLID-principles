class Bird {
    fly() {
        console.log("Bird fly");
    }

    makeSound() { }
}

class Sparrow extends Bird {
    fly() {
        console.log("Sparrow fly");
    }

    makeSound(){
        console.log("Sparrow sound")
    }
}

class Penguin extends Bird {
    fly() {
        throw new Error("Penguin cannot fly")
        // As Penguin cannot fly
    }

    makeSound(){
        console.log("Penguin sound")
    }
}

function makeBirdFly(bird: Bird) {
    bird.fly();
}

// makeBirdFly(new Bird());

// As the principle states that a Parent class object should be able to be replaced by child class object
// Let's start replacing

// makeBirdFly(new Sparrow()); // It doesn't break the program

makeBirdFly(new Penguin()); // It breaks the program

// So it is not following LSP



 