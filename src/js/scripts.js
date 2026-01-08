// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars
async function main() {
  class Student {
    // This is a "greedy" constructor, meaning it takes as much data through parameters as possible.
    constructor(firstName, lastName, dateOfBirth) {
      this.firstName = firstName;
      this.lastName = lastName;
      // If you use the backing field here (this.#dateOfBirth), you are bypassing any validation - if you do this, ensure it is intentional.
      this.dateOfBirth = dateOfBirth;
    }

    firstName;
    lastName;

    // Backing field for the property referenced in the getter and setter.
    #dateOfBirth;
    // Basic getter without any formatting logic.
    get dateOfBirth() {
      return this.#dateOfBirth;
    }
    // Basic setter without any validation logic.
    set dateOfBirth(value) {
      this.#dateOfBirth = value;
    }
    // ^ Essentially this is just a really long winded field at this point.

    introduce() {
      output(`Hello, my name is ${this.firstName} ${this.lastName}!`);
    }
  }

  let newFirstName = await input("Please enter your first name: ")
  let newLastName = await input("Please enter your last name: ")
  let newDate = await input("Please enter your date of birth: ")

  const me = new Student(newFirstName, newLastName, newDate);
  me.introduce();
  output(JSON.stringify(me));
}

