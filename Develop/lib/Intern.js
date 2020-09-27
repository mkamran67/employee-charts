// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
// Extends -> Email - Name - ID -> School
const { Employee } = require('./Employee');

class Intern extends Employee {
  constructor(email, name, id, school) {
    super(email, name, id);
    this.school = school;
  }

  get school() {
    return this.school;
  }

  set school(school) {
    this.school = school;
  }
}

module.exports.Intern = Intern;
