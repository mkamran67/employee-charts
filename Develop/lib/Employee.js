// TODO: Write code to define and export the Employee class
// Class -> Email - Name - ID
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.email = email;
    this.id = id;
  }
  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return 'Employee';
  }
}
module.exports.Employee = Employee;
