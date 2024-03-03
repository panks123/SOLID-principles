// Keep all the common methods in Base class

class BaseBird {
    // As every bird can make sound but every bird cannot fly so we are keeping onley makeSound here
    makeSound() { }
}

class Bird1 extends BaseBird {
    fly() {
        console.log("Bird fly");
    }

    makeSound() { }
}

class Sparrow1 extends Bird1{
    fly() {
        console.log("Sparrow fly");
    }

    makeSound(){
        console.log("Sparrow sound")
    }
}

// So here we are extending from BaseBird class and not bird class as Bird class has fly() method but Penguin class cannot use fly method
class Penguin1 extends BaseBird {
    makeSound(){
        console.log("Penguin sound")
    }
}

function makeBirdFly1(bird: Bird1) {
    bird.fly();
}


// makeBirdFly1(new Bird1());

makeBirdFly1(new Sparrow1())

// makeBirdFly1(new Penguin1()) // Now here TS is  only giving warning that we cannoot pass Penguin1 instance as makeBirdFly1 function 
                               // is meant to be for only those who can fly

// So this code is following LSP mow