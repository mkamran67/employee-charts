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
const {
  managerQueries,
  internQueries,
  engineerQueries,
} = require('./modules/Questions'); // -> Questions

// Global Variable
let collective = {};
let employeeObjArr = [];

// Get Manager Info and Employee Count
async function getManagerInfo() {
  const {
    managerName,
    managerId,
    email,
    officeNumber,
    engineerCount,
    internCount,
  } = await inquirer.prompt(managerQueries);

  collective.engineerCount = engineerCount;
  collective.internCount = internCount;

  return new Manager(managerName, managerId, email, officeNumber);
}

// Recursive Functions will call till limit is met.
async function askAgain(queries, count, limit) {
  return await inquirer.prompt(queries).then(async (answers) => {
    // Push current answers into storage -> object array
    employeeObjArr.push(answers);

    count++;
    // Break Recursive loop when limit -> Amount of employees is met.
    if (count > limit) {
      return;
    }
    await askAgain(queries, count, limit);
  });
}

// Create Employee Object Array
function createEmployeeObjs(manager) {
  let tempArr = []; // Will contain all the New objects
  let counter = 0; // To keep a consistent counter. Ignoring for loop counter

  // Push Manager into array
  tempArr.push(manager);

  // create and push engineer objects
  for (let i = 0; i < collective.engineerCount; i++) {
    const { engineerName, engineerId, email, github } = employeeObjArr[counter];
    counter++;
    tempArr.push(new Engineer(engineerName, engineerId, email, github));
  }

  // create and push intern objects
  for (let i = 0; i < collective.internCount; i++) {
    const { internName, internId, email, school } = employeeObjArr[counter];
    counter++;
    tempArr.push(new Intern(internName, internId, email, school));
  }

  return new Promise((resolve, reject) => {
    try {
      console.log(tempArr);
      resolve(tempArr);
    } catch (err) {
      reject(`something wrong`);
    }
  });
}

// Main Function
async function main() {
  // Variables
  // 1. Get Manager Details and
  let managerObj = await getManagerInfo();

  // 2. Get Employee Information
  let engineerObj = await askAgain(
    engineerQueries,
    1,
    collective.engineerCount
  );

  // 3. Get Intern Information
  let internObj = await askAgain(internQueries, 1, collective.internCount);

  let employeeObjArr = await createEmployeeObjs(managerObj);

  let myHtml = await render(employeeObjArr);

  fs.writeFileSync(`${OUTPUT_DIR}/team.html`, myHtml, 'utf8');
}

main();
