// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const { Employee } = require('./Employee');

class Engineer extends Employee {
  constructor(email, name, id, githubUser) {
    super(email, name, id);
    this.githubUser = githubUser;
  }

  get githubUser() {
    return this.githubUser;
  }

  set githubUser(githubUser) {
    this.githubUser = githubUser;
  }
}

module.exports.Engineer = Engineer;
