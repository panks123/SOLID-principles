// Consider a scenario with a large, generic interface:

interface Workerr {
    work(): void;
    eat(): void;
    sleep(): void;
  }
  
  class Human implements Workerr {
    work() {
      console.log("Working...");
    }
  
    eat() {
      console.log("Eating...");
    }
  
    sleep() {
      console.log("Sleeping...");
    }
  }
  
  class Robot implements Workerr {
    work() {
      console.log("Processing data...");
    }
  
    eat() {
      // Robots don't eat, but they are forced to implement this method
      console.log("Robots don't eat!");
    }
  
    sleep() {
      // Robots don't sleep, but they are forced to implement this method
      console.log("Robots don't sleep!");
    }
  }
  
// It violates the Interface Segregation Principle because the Robot class has to implement methods that are irrelevant to it.