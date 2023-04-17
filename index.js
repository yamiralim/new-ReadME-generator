// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./Develop/utils/generateMarkdown")

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
      message: "Please provide a brief description of your project:",
    },
    {
      type: "input",
      name: "installation",
      message: "Please provide installation instructions for your project:",
    },
    {
      type: "input",
      name: "usage",
      message: "Please provide usage information for your project:",
    },
    {
      type: "list",
      name: "license",
      message: "Please select a license for your project:",
      choices: ["MIT", "GPLv3", "Apache", "None"],
    },
    {
      type: "input",
      name: "contributing",
      message: "Please provide guidelines for contributing to your project:",
    },
    {
      type: "input",
      name: "tests",
      message: "Please provide instructions for running tests on your project:",
    },
    {
      type: "input",
      name: "github",
      message: "What is your GitHub username?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address?",
    },
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
      err ? console.error(err) : console.log("Success! Your README.md file has been generated!")
    );
  }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
      const markdown = generateMarkdown(data);
      writeToFile("README.md", markdown);
    });
  }

// Function call to initialize app
init();
