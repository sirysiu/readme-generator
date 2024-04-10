// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');


// const prompt = inquirer.createPromptModule();
// TODO: Create an array of questions for user input
const questions = [
  {
      type: "input",
      name: "title",
      message: "What is your project title?",
  },
  {
      type: "input",
      name: "description",
      message: "Write your projects description: ",
  },
  {
      type: "input",
      name: "instalation",
      message: "Write your projects instalation instructions: ",
  },
  {
      type: "input",
      name: "usage",
      message: "Write your projects usage information: ",
  },
  {
      type: "input",
      name: "screenshot",
      message: "What is the file name of the screenshot in your assets/images folder? (example: screenshot.png) ",
  },
  {
      type: "input",
      name: "credits",
      message: "Write your projects contributing guidelines: ",
  },
  {
      type: "input",
      name: "test",
      message: "Write your projects test instructions: ",
  },
  {
      type: "list",
      name: "license",
      message: "Select a license to use: ",
      choices: ["MIT", "Apache", "GNU General Public", "ISC", new inquirer.Separator(), "NONE"]
  },
  // TODO: Add questions about github and email for the "Questions" section. 
  {
      type: "input",
      name: "gitHub",
      message: "Provide your GitHub user name: ",
  },
  {
      type: "input",
      name: "email",
      message: "Provide your E-Mail: ",
  },
];

/// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const markdownContent = generateMarkdown(data);
  fs.writeFile(
      fileName,
      markdownContent,
      (err) => {
          if (err) {
              console.error(err);
              return;
          }
          console.log("README.md Created!")

      }
  );
}



//TODO: Create a function to initialize app
function init() {
  inquirer
  .prompt(questions)
  .then((response) => {
      const fileName = "README.md";
      writeToFile(fileName, response)
  }
  );

}

//Function call to initialize app
init();