interface Workable {
    work(): void;
  }
  
  interface Eatable {
    eat(): void;
  }
  
  interface Sleepable {
    sleep(): void;
  }
  
  class Humann implements Workable, Eatable, Sleepable {
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
  
  class Robott implements Workable {
    work() {
      console.log("Processing data...");
    }
  }
  

//   , each class implements only the interfaces that are relevant to its behavior. The Robot class is not forced to implement unnecessary methods

// So now it adheres to the Interface Segregation Principle