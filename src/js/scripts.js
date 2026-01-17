// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars
async function main() {
  class Person {
    constructor(firstName, middleName, lastName) {
      if (this.constructor == Person) {
        throw new Error("Abstract classes cannot be directly instantiated.");
      }
      this.firstName = firstName;
      this.middleName = middleName;
      this.lastName = lastName;
    }
    firstName;
    middleName;
    lastName;

    get fullName() {
      return `${this.firstName} ${this.middleName} ${this.lastName}`;
    }

    greet() {
      throw new Error("Abstract method was not implemented.");
    }
  }
  class Student extends Person {
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
    greet() {
      return `Hello, my name is ${this.fullName} and I am a student!`;
    }
  }
  class Lawyer extends Person {
    get fullName() {
      return `${this.firstName} ${this.middleName[0]}. ${this.lastName}`;
    }
    greet() {
      return `Hello, my name is ${this.middleName} Esq. and I am a lawyer.`;
    }
  }

  class BusDriver extends Person {
    greet() {
      return `Hello, my name is ${this.fullName} and I drive a bus!`;
    }
  }

  const people = [
    new Student("John", "Doe", "Smith"),
    new BusDriver("Jane", "Ashley", "Doe"),
    new Lawyer("Joseph", "Paul", "Goode"),
    new BusDriver("Josh", "Edward", "Wilson")
  ];
  for (person of people) {
    output(person.greet());
  }
}

