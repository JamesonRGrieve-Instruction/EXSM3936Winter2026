// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars
async function main() {
  class Pen {
    constructor(brand, colour) {
      this.brand = brand;
      this.colour = colour;
      this.inkLevel = 100;
    }

    brand;
    colour;

    #inkLevel;
    get inkLevel() {
      return this.#inkLevel;
    }
    set inkLevel(value) {
      if (value < 0) {
        throw new Error("The pen is out of ink!");
      }
      this.#inkLevel = value;
    }

    write(charCount) {
      // output("Before: " + this.#inkLevel);
      // output(charCount);
      try {
        this.inkLevel -= charCount * 0.5;
      }
      catch (e) {
        output(e);
      }
      // output("After: " + this.#inkLevel);
    }
  }

  const myPen = new Pen("Bic", "Blue");
  myPen.write(100);
  myPen.write(42);
  myPen.write(200);
  output(myPen.inkLevel);
}

