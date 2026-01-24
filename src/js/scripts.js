// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars
async function main() {

  class Shape {
    // This is a "greedy" constructor, meaning it takes as much data through parameters as possible.
    constructor(colour) {
      if (this.constructor == Shape) {
        throw new Error("Abstract classes cannot be directly instantiated.");
      }
      this.colour = colour;
    }

    colour;

    get perimeter() {
      throw new Error("Perimeter property is not implemented.");
    }

    get area() {
      throw new Error("Area property is not implemented.");
    }

    contain() {
      throw new Error("Contain method is not implemented.");
    }
  }
  class Rectangle extends Shape {
    constructor(length, width, colour) {
      super(colour);
      this.length = length;
      this.width = width;
    }

    get perimeter() {
      return Number((this.length * 2 + this.width * 2).toFixed(2));
    }

    get area() {
      return Number((this.length * this.width).toFixed(2));
    }

    get isSquare() {
      return this.length == this.width;
    }

    length;
    width;

    contain() {
      const edge = Math.max(this.length, this.width);
      return new Rectangle(edge, edge, this.colour);
    }
  }
  class Triangle extends Shape {
    constructor(base, height, colour) {
      super(colour);
      this.base = base;
      this.height = height;
    }

    base;
    height;

    get perimeter() {
      return Number((this.base + (2 * Math.sqrt(Math.pow(this.height, 2) + Math.pow(this.base / 2, 2)))).toFixed(2))
    }

    get area() {
      return Number((this.base * this.height / 2).toFixed(2));
    }

    contain() {
      const edge = Math.max(this.base, this.height);
      return new Rectangle(edge, edge, this.colour);
    }
  }

  class Circle extends Shape {
    constructor(radius, colour) {
      super(colour);
      this.radius = radius;
    }

    radius;

    get diameter() {
      return Number((this.radius * 2).toFixed(2));
    }

    get perimeter() {
      return Number((this.diameter * Math.PI).toFixed(2));
    }
    get circumference() {
      return this.perimeter;
    }

    get area() {
      return Number((Math.PI * Math.pow(this.radius, 2)).toFixed(2));
    }

    contain() {
      return new Rectangle(this.diameter, this.diameter, this.colour);
    }
  }

  let choice;
  const shapes = [];
  do {
    output("Select a Shape to Create:\n1. Rectangle\n2. Triangle\n3. Circle\n0. Exit");
    choice = (await input("Choose:")).trim();
    if (choice == "1") {
      output("Creating Rectangle");
      shapes.push(new Rectangle(await input("Please enter Length:"), await input("Please enter Width:"), "Black"));
    }
    else if (choice == "2") {
      output("Creating Triangle");
      shapes.push(new Triangle(await input("Please enter Base:"), await input("Please enter Height:"), "Black"));
    }
    else if (choice == "3") {
      output("Creating Circle");
      shapes.push(new Circle(await input("Please enter Radius:"), "Black"));
    }
    else {
      output("Invalid selection, please try again!");
    }
    if (["1", "2", "3"].includes(choice)) {
      console.log(shapes);
      output(`Total Perimeter: ${shapes.reduce((acc, val) => {
        return acc + val.perimeter;
      }, 0)}`);
      output(`Total Area: ${shapes.reduce((acc, val) => {
        console.log(acc, val);
        return acc + val.area;
      }, 0)}`);
      output(`Total Area of Containing Squares: ${shapes.reduce((acc, val) => {
        console.log(acc, val);
        return acc + val.contain().area;
      }, 0)}`);
    }
  } while (choice != "0");

}

