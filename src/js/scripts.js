// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars
async function main() {
  class Car {
    // This is a "greedy" constructor, meaning it takes as much data through parameters as possible.
    constructor(make, model, year, cylinderCount, automatic, gears) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.odometer = 0;
      this.engine = new Engine(cylinderCount);
      this.transmission = new Transmission(automatic, gears);
    }

    make;
    model;
    odometer;
    engine;
    transmission;
    year;


    startEngine() {
      if (this.engine.isRunning) {
        throw new Error("Your starter makes a very not-nice noise, the car is already running.");
      }
      this.engine.isRunning = true;
    }
    stopEngine() {
      this.engine.isRunning = false;
    }
    shift(gear) {
      this.transmission.currentGear = gear;
    }
    drive(distance) {
      if (!this.engine.isRunning) {
        throw new Error("Start the engine before driving!");
      }
      if (isNaN(this.transmission.currentGear) && this.transmission.currentGear != "D") {
        throw new Error("You must be in a forward gear to drive!");
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
  class Transmission {
    constructor(automatic, gears) {
      this.automatic = automatic;
      this.gears = ['N', 'R'];
      if (automatic) {
        this.gears.push('P', 'D');
      }
      else {
        for (let i = 1; i <= gears; i++) {
          this.gears.push(i.toString());
        }
      }
      this.currentGear = 'N';
    }
    #currentGear;
    set currentGear(value) {
      if (!this.gears.includes(value.trim())) {
        throw new Error("That's not a valid gear!");
      }
      this.#currentGear = value;
    }
    get currentGear() {
      return this.#currentGear
    }
    automatic;
    gears;
  }

  const myCar = new Car("Dodge", "Stealth", 1992, 6, false, 5);
  myCar.startEngine();
  myCar.shift("1");
  myCar.drive(100);
  myCar.shift("N");
  myCar.stopEngine();
  myCar.startEngine();
  myCar.shift("1");
  myCar.drive(50);
  myCar.shift("N");
  myCar.stopEngine();
  output(myCar.odometer);

  output(JSON.stringify(myCar));
}

