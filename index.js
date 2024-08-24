//Linked Packages for this project
var inquirer = require('inquirer');
const fs = require('fs');
var generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What is your GitHub username? No @ Required",
        name: 'username',
        validate: function(answer) {
            if (answer.length < 1) {
                return console.log("Please enter a valid GitHub Username.");
            }
            return true;
        }
        
    },

    {
        type: 'input',
        message: "What is your E-Mail address?",
        name: 'email',
        validate: function(answer) {
            if (answer.length < 1) {
                return console.log ("Please enter a valid E-Mail address.")
            }
            return true;
        }
    },

    {
        type: 'input',
        message: "What would you like to name this project?",
        name: 'projectName',
        validate: function(answer) {
            if(answer.length < 1) {
                return console.log("Please enter a valid project name.");
            }
            return true;
        }
        
    },
    {
        type: 'input',
        message: "Plese enter a short description of your project",
        name: 'projectDescription',
        validate: function(answer) {
            if (answer.length < 1) {
                return console.log("Please enter a description of your project.")
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "How do I install this?",
        name: 'instillation',
        validate: function(answer) {
            if (answer.length < 1) {
                return console.log("Please provide instillation instructions.")
            }
            return true;
        }
    },
    {
        type:'input',
        message: 'How would you use this application?', 
        name: 'usage',
        validate: function(answer) {
            if (answer.length < 1) {
                return console.log("Please define the use of this application.")
            }
            return true;
        }
    },
    {
        type:'input',
        message: 'How do users contribute to this project?', 
        name: 'contributions',
        validate: function(answer) {
            if (answer.length < 1) {
                return console.log("Please provide contributions information.")
            }
            return true;
        }
    },
    {
        type: "list",
        name: "License",
        message: "Please choose a license.",
        choices: ["GNU GPLv3", "Apache License 2.0", "MIT License", "Boost Software License 1.0", "None"],
      },
    {
        type:'input',
        message: 'How would you test this application?', 
        name: 'testing',
        validate: function(answer) {
            if (answer.length < 1) {
                return console.log("Please provide testing for this application.")
            }
            return true;
        }
    },
    {
        type:'list',
        message: 'Please choose a license for this project.', 
        name: 'licensing',
        choices: ['Unlicensed','GNU', 'Mozilla'],
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const filePath = `${fileName}`;
    fs.writeFile(filePath, data, (err) => {
      if (err) {
        throw err;
      }
      console.log(`The ${fileName} file has been created!`);
    });
  }


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
      console.log(answers);
      const githubLink = `https://github.com/${answers.GithubUsername}`;
      const data = generateMarkdown(answers, githubLink);
      writeToFile("README.md", data);
    });
  }
  
  init();