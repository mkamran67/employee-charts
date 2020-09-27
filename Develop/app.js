const { Manager } = require('./lib/Manager');
const { Engineer } = require('./lib/Engineer');
const { Intern } = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const OUTPUT_DIR = path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, 'team.html');

const render = require('./lib/htmlRenderer');

// Personal Modules
const { managerQueries } = require('./modules/Questions'); // -> Questions
const { Employee } = require('./lib/Employee');

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

// Questions
// 1. Manager details and how many engineers/interns
// Get engineer/intern details.
function getManagerInfo() {
  let managerObj;
  let returnObj = {};

  inquirer
    .prompt(managerQueries)
    .then(
      ({
        managerName,
        managerId,
        email,
        officeNumber,
        engineerCount,
        internCount,
      }) => {
        managerObj = new Manager(managerName, managerId, email, officeNumber);
        returnObj.Manager = managerObj;
        returnObj.engineerCount = engineerCount;
        returnObj.internCount = internCount;

        returnObj.engineer = getEmployeeInfo('engineer', engineerCount);
        returnObj.intern = getEmployeeInfo('intern', internCount);
      }
    );

  return returnObj;
}

function getEmployeeInfo(employeeType, count) {
  let queryArr = [];
  let returnArr = [];
  let tempObj = {};

  // Build an Array of questions
  for (let i = 0; i < count; i++) {
    console.log(`${count} ${employeeType}`);

    queryArr.push({
      type: 'input',
      name: `${employeeType}name${i + 1}`,
      message: `${employeeType} number ${i + 1} name: `,
      validate: function (name) {
        if (name.length > 3) {
          return true;
        }
        return 'Enter at least 3 characters:';
      },
    });
    queryArr.push({
      type: 'input',
      name: `${employeeType}Email${i + 1}`,
      message: `${employeeType} number ${i + 1} email: `,
      validate: function (email) {
        const regCheckemail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if (regCheckemail.test(String(email).toLowerCase())) {
          return true;
        } else {
          return 'Please enter a valid email address';
        }
      },
    });
    queryArr.push({
      type: 'input',
      name: `${employeeType}Id${i + 1}`,
      message: `${employeeType} number ${i + 1} ID: `,
      validate: function (id) {
        if (id.length >= 1) {
          return true;
        }

        return 'Enter at least 1 character:';
      },
    });
    queryArr.push({
      type: 'input',
      name: `${
        employeeType === 'engineer'
          ? `engineerGithub${i + 1}`
          : `internSchool${i + 1}`
      }`,
      message: `${
        employeeType === 'engineer'
          ? `Engineer number ${i + 1} Github Username: `
          : `Intern number ${i + 1} School name: `
      }`,
      validate: function (value) {
        if (value.length > 3) {
          return true;
        }

        return 'Enter at least 3 characters:';
      },
    });
  } // End of For Loop

  // console.log(queryArr);
  inquirer.prompt(queryArr).then((answers) => {
    returnArr.push(answers);
  });
  return returnArr;
}

function main() {
  // Variables
  // 1. Get Manager Details and
  let mainObj = getManagerInfo();
  console.log(mainObj);
}

main();
