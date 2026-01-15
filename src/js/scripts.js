// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars
async function main() {
  class WritingUtensil {
    constructor(brand, colour) {
      if (this.constructor == WritingUtensil) {
        throw new Error("Abstract classes cannot be directly instantiated.");
      }
      this.brand = brand;
      this.colour = colour;
    }
    brand;
    colour;

    write() {
      throw new Error("Abstract method was not implemented.");
    }
  }
  class Pencil extends WritingUtensil {
    constructor(brand, colour) {
      super(brand, colour);
      this.length = 19;
      this.sharp = true;
    }

    sharp;

    #length;
    get length() {
      return this.#length;
    }
    set length(value) {
      output(`Sharpening pencil - length before is ${this.length}cm.`);
      if (value < 0) {
        throw new Error("The pencil is gone!");
      }
      this.#length = value;
    }

    get length_inches() {
      return this.#length * 0.393701;
    }

    write(charCount) {
      for (let i = 0; i < charCount; i++) {
        const random = Math.floor(Math.random() * 100);
        const broken = random > 95;
        output(`For character ${i + 1}, generated ${random} which ${broken ? "breaks" : "does not break"} the pencil tip.`);
        if (broken) {
          this.sharp = false;
        }
        if (!this.sharp) {
          this.sharpen();
        }
      }
    }

    sharpen() {
      this.length -= 1;
      this.sharp = true
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
        output("Writing with pen!");
        this.inkLevel -= charCount * 0.5;
      }
      catch (e) {
        output(e);
      }
      // output("After: " + this.#inkLevel);
    }
  }

  const myPen = new Pen("Bic", "Blue");
  // myPen.write(50);

  const myPencil = new Pencil("Ticonderoga", "Black");
  // myPencil.write(50);

  const myUtensils = [myPen, myPencil];
  for (utensil of myUtensils) {
    utensil.write(50);
  }
}

