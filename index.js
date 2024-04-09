// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// const prompt = inquirer.createPromptModule();
// TODO: Create an array of questions for user input
const questions = inquirer.createPromptModule();
questions ([
    {
        type: 'input',
        message: 'Please enter your project name',
        name: 'project',
      
      },
      {
        type: 'input',
        message: 'Please enter a description',
        name: 'description',
       
      },
      {
        type: 'input',
        message: 'Please enter a table of content',
        name: 'content',
        
      },
      {
        type: 'input',
        message: 'List your installations',
        name: 'installations',
        
      },
      {
        type: 'input',
        message: 'List your usage',
        name: 'usage',
       
      },
      {
        type: 'input',
        message: 'List your license',
        name: 'license',
        
      },
      {
        type: 'input',
        message: 'List your contributing',
        name: 'contributes',
        
      },
      {
        type: 'input',
        message: 'List your test instructions ',
        name: 'test',
       
      },

])

// TODO: Create a function to write README file
// function writeToFile(file, data) {
    
// }

.then((data) => {
    console.log(data);
    const readMe = `# readme-generator
    ${data.project}

    Description
    ${data.description}
    Table of Contents
    ${data.content}
    Installation
    ${data.installation}
    Usage
    ${data.usage}
    License
    ${data.license}
    Contributing
    ${data.contributes}
    Test and Questions
    ${data.test} `

    if (!fs.existsSync('./README.md')) {
      fs.mkdirSync('./README.md');
    }

    fs.writeFileSync('README.md', readMe);
  });

// TODO: Create a function to initialize app
function init() {
  // inquirer
  // .prompt(questions)
  // .then((response) => {
  //     const fileName = "README.md";
  //     writeToFile(fileName, response)
  // }
  // );

}

// Function call to initialize app
init();