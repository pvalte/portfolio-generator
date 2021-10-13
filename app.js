const inquirer = require('inquirer');
// const fs = require('fs');
// const generatePage = require('./src/page-template.js');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your github?'
    }
  ])
  .then(answers => console.log(answers.name));

// const pageHTML = generatePage(name, github);

// fs.writeFile('./index.html', generatePage(name, github), err => {
//     if (err) throw new Error(err);
  
//     console.log('Portfolio complete! Check out index.html to see the output!');
// });

//const profileDataArgs = process.argv.slice(2, process.argv.length);
// console.log(profileDataArgs);

// const printProfileData = profileDataArr => {
//     // This...
//     for (let i = 0; i < profileDataArr.length; i += 1) {
//       console.log(profileDataArr[i]);
//     }
  
//     console.log('================');
  
//     // Is the same as this...
//     profileDataArr.forEach(profileItem => console.log(profileItem));
// };
  
// printProfileData(profileDataArgs);

// const profileDataArgs = process.argv.slice(2, process.argv.length);

// const [name, github] = profileDataArgs;
