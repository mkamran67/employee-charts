// TODO: Write code to define and export the Employee class
// Class -> Email - Name - ID
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.email = email;
    this.id = id;
  }

  set name(x) {
    this._name = x;
  }
  get name() {
    return this._name;
  }

  // id Setter and Getter
  get id() {
    return this._id;
  }
  set id(x) {
    this._id = x;
  }

  // email Setter and Getter
  get email() {
    return this._email;
  }
  set email(x) {
    this._email = x;
  }
}

module.exports.Employee = Employee;
