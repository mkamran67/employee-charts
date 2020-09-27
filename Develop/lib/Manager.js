// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const { Employee } = require('./Employee');

// Object Accepts -> email, name, id, officeNumber -> on Construct.
class Manager extends Employee {
  constructor(email, name, id, officeNumber) {
    super(email, name, id);
    this.officeNumber = officeNumber;
  }

  get officeNumber() {
    return this.officeNumber;
  }

  set officeNumber(officeNumber) {
    this.officeNumber = officeNumber;
  }
}
module.exports.Manager = Manager;
