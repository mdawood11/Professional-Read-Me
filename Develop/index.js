// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },

  {
    type: "input",
    name: "description",
    message: "What is the description of your project?",
  },

  {
    type: "input",
    name: "installation",
    message: "How can you install your project?",
  },

  {
    type: "input",
    name: "usage",
    message: "How to use your project?",
  },

  {
    type: "list",
    name: "license",
    message: "Which license dose your project use?",
    choices: ["Eclipse Public", "ISC", "MIT", "zLib"],
  },

  {
    type: "input",
    name: "contributing",
    message: "Is there any contribution in your project?",
  },

  {
    type: "input",
    name: "test",
    message: "Is there any test require to run your project?",
    default: "npm test",
  },

  {
    type: "input",
    name: "github",
    message: "What is your github username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    err
      ? console.error(err)
      : console.log("successful. Your README.md file is created.");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    const filename = "README.md";

    writeToFile(filename, generateMarkdown(data));
  });
}

// Function call to initialize app
init();
