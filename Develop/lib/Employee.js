// TODO: Write code to define and export the Employee class
// Class -> Email - Name - ID
class Employee {
  constructor(email, name, id) {
    this.name = name;
    this.email = email;
    this.id = id;
  }

  get name() {
    return this.name;
  }

  get email() {
    return this.email;
  }

  get id() {
    return this.id;
  }

  set name(name) {
    this.name = name;
  }

  set email(email) {
    this.email = email;
  }

  set id(id) {
    this.id = id;
  }
}

module.exports.Employee = Employee;
