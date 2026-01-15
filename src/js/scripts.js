// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars
async function main() {
  class WritingUtensil {
    constructor(brand, colour) {
      this.brand = brand;
      this.colour = colour;
    }
    brand;
    colour;
  }
  class Pencil extends WritingUtensil {
    constructor(brand, colour) {
      super(brand, colour);
      this.length = 19;
    }

    #length;
    get length() {
      return this.#length + "cm";
    }
    set length(value) {
      if (value < 0) {
        throw new Error("The pencil is gone!");
      }
      this.#length = value;
    }
  }
  class Pen extends WritingUtensil {
    constructor(brand, colour) {
      super(brand, colour);
      this.inkLevel = 100;
    }

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

