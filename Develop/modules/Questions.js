// Set(s) of Queries to ask the user.
// Manager Queries -> name, id, officeNumber, email
// answers variables -> managerName, managerId, email, officeNumber, engineerCount, internCount
const managerQueries = [
  {
    type: 'input',
    name: 'managerName',
    message: 'What is the team lead name:',
    validate: function (managerName) {
      if (managerName.length > 3) {
        return true;
      }

      return 'Please enter at least 3 characters';
    },
  },
  {
    type: 'input',
    name: 'managerId',
    message: 'What is the team lead id:',
    validate: function (managerId) {
      if (managerId.length >= 1) {
        return true;
      }

      return 'Please enter at least 1 character';
    },
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is the team lead email:',
    // validate: function (email) {
    //   const regCheckEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    //   if (regCheckEmail.test(String(email).toLowerCase())) {
    //     return true;
    //   } else {
    //     return 'Please enter a valid email address';
    //   }
    // },
  },
  {
    type: 'input',
    name: 'officeNumber',
    message: 'What is the team lead office number:',
    validate: function (officeNumber) {
      // Dumbed down to make it less tedious in testing.
      //   var pass = officeNumber.match(
      //     /^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i
      //   );
      //   if (pass) {
      //     return true;
      //   }

      if (parseInt(officeNumber, 10) >= 1) {
        return true;
      }
      return 'Please enter at least 1 number';
      //   return 'Please enter a valid phone number';
    },
  },
  {
    type: 'number',
    name: 'engineerCount',
    message: 'How many engineers does your team have: ',
    validate: function (engineerCount) {
      if (typeof engineerCount === 'number' && engineerCount >= 1) {
        return true;
      }

      return 'Please enter a valid number greator then 0';
    },
  },
  {
    type: 'number',
    name: 'internCount',
    message: 'How many interns does your team have: ',
    validate: function (internCount) {
      if (typeof internCount === 'number' && internCount >= 1) {
        return true;
      }

      return 'Please enter a valid number greator then 0';
    },
  },
];

const internQueries = [
  {
    type: 'input',
    name: 'internName',
    message: 'What is the intern name:',
    validate: function (internName) {
      if (internName.length > 3) {
        return true;
      }
      return 'Please enter at least 3 characters';
    },
  },
  {
    type: 'input',
    name: 'internId',
    message: 'What is the intern id:',
    // validate: function (internId) {
    //   if (internId.length >= 1) {
    //     return true;
    //   }
    //   return 'Please enter at least 1 character';
    // },
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is the intern email:',
    // validate: function (email) {
    //   const regCheckEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    //   if (regCheckEmail.test(String(email).toLowerCase())) {
    //     return true;
    //   } else {
    //     return 'Please enter a valid email address';
    //   }
    // },
  },
  {
    type: 'input',
    name: 'school',
    message: 'What is the intern school:',
    // validate: function (school) {
    //   if (school.length >= 1) {
    //     return true;
    //   }
    //   return 'Please enter at least 1 character';
    // },
  },
];

const engineerQueries = [
  {
    type: 'input',
    name: 'engineerName',
    message: 'What is the engineer name:',
    validate: function (engineerName) {
      if (engineerName.length > 3) {
        return true;
      }

      return 'Please enter at least 3 characters';
    },
  },
  {
    type: 'input',
    name: 'engineerId',
    message: 'What is the engineer id:',
    // validate: function (engineerId) {
    //   if (engineerId.length >= 1) {
    //     return true;
    //   }

    //   return 'Please enter at least 1 character';
    // },
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is the engineer email:',
    // validate: function (email) {
    //   const regCheckEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    //   if (regCheckEmail.test(String(email).toLowerCase())) {
    //     return true;
    //   } else {
    //     return 'Please enter a valid email address';
    //   }
    // },
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is the engineers github:',
    // validate: function (github) {
    //   if (github.length >= 1) {
    //     return true;
    //   }

    //   return 'Please enter at least 1 character';
    // },
  },
];

module.exports = {
  managerQueries,
  internQueries,
  engineerQueries,
};
