//Linked Packages for this project


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What is your GitHub username? No @ Required",
        name: 'username'
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
        name: 'email'
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
        name: 'projectName'
        validate: function(answer) {
            if(answer.length < 1) {
                return console.log("Please enter a valid project name.");
            }
            return true;
        }
        
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
