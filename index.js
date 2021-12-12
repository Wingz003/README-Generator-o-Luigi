// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const util = require('util');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of this project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is the description of this readme?',
        name: 'description',

    },
    {
        type: 'input',
        message: 'List of dependencies required to run this project?',
        name: 'installation',
        
    },
    {
        type: 'list',
        message: 'What license are you using?',
        name: 'license',
        choices: ['license a', 'license b'],
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.error(err)
            return
        }
    })
}
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {
        writeToFile("README.md", generateMarkdown(response))
    });

}

// Function call to initialize app
init();
