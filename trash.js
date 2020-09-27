/* async function getEmployeeInfo(internCount, engineerCount) {

  let returnArr = [];

  // Generate Query Arrays for employees
  let subFunction = async (employeeType, count) => {
    // Push 1 Set of Questions to Object
    let tempObj = {};
    tempObj[`${employeeType}`] = [];

    // Build an Array of questions
    for (let i = 0; i < count; i++) {
      // Create an array of questions
      let tempArr = [];

      tempArr.push({
        type: 'input',
        name: `${employeeType}name`,
        message: `${employeeType} number ${i + 1} name: `,
        validate: function (name) {
          if (name.length > 3) {
            return true;
          }
          return 'Enter at least 3 characters:';
        },
      });
      tempArr.push({
        type: 'input',
        name: `${employeeType}Email`,
        message: `${employeeType} number ${i + 1} email: `,
        validate: function (email) {
          // const regCheckemail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

          // if (regCheckemail.test(String(email).toLowerCase())) {
          //   return true;
          // } else {
          //   return 'Please enter a valid email address';
          // }

          if (email.length > 1) {
            return true;
          }

          return 'more then 1 character';
        },
      });
      tempArr.push({
        type: 'input',
        name: `${employeeType}Id`,
        message: `${employeeType} number ${i + 1} ID: `,
        validate: function (id) {
          if (id.length >= 1) {
            return true;
          }
          return 'Enter at least 1 character:';
        },
      });
      tempArr.push({
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

      // Push current Array of Questions into Obj.Engineer[]
      tempObj[`${employeeType}`].push(tempArr);
    } // End of For Loop

    return new Promise((resolve, reject) => {
      inquirer.prompt(tempObj).then((answers) => {
        console.log(tempObj);
        resolve({ employeeType, answers });

        if (answers === null) {
          reject('somthing wrong :/');
        }
      });
    });
  };

  subFunction('engineer', engineerCount)
    .then((data) => {
      returnArr.push(data);
    })
    .catch((err) => {
      console.log(err);
    });

  subFunction('intern', internCount)
    .then((data) => {
      returnArr.push(data);
    })
    .catch((err) => {
      console.log(err);
    });
}
 */

// Write code to use inquirer to 1. gather information about the development team members,
// and to 2. create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the 3.`render` function (required
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
