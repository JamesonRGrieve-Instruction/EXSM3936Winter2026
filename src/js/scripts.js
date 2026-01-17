// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars
async function main() {
  class Car {
    // This is a "greedy" constructor, meaning it takes as much data through parameters as possible.
    constructor(make, model, year, cylinderCount) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.odometer = 0;
      this.engine = new Engine(cylinderCount);
    }

    make;
    model;
    odometer;
    engine;
    year;


    startEngine() {
      this.engine.isRunning = true;
    }
    stopEngine() {
      this.engine.isRunning = false;
    }
    drive(distance) {
      if (!this.engine.isRunning) {
        throw new Error("Start the engine before driving!");
      }
      this.odometer += distance;
    }
  }
  class Engine {
    constructor(cylinderCount) {
      this.cylinderCount = cylinderCount;
      this.isRunning = false;
    }

    cylinderCount;
    isRunning;
  }

  const myCar = new Car("Dodge", "Stealth", 1992, 6);
  myCar.startEngine();
  myCar.drive(100);
  myCar.stopEngine();
  myCar.startEngine();
  myCar.drive(50);
  myCar.stopEngine();
  output(myCar.odometer);

  output(JSON.stringify(myCar));
}

