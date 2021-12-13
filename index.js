// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your username on Github?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your unique repository name?',
        name: 'repositoryname'
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
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
        type: 'input',
        message: 'What is the following procedure to use this application?',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'What are the required test/tests for this project?',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'Who has contributed to this project?',
        name: 'contributions'
    },
    {
        type: 'list',
        message: 'What license are you using?',
        name: 'license',
        choices: ['None', 'MIT'],
    },
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
