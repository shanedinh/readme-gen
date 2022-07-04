// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            }
            else {
                console.log('Hey, you really need to name this project.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe your project.',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            }
            else {
                console.log('Hey, you really need to describe your project.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please give a step-by-step description of how to get the development environment running.',
        validate: installInput => {
            if (installInput) {
                return true;
            }
            else {
                console.log('I think you are forgetting something...');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions and examples for use',
        validate: usageInput => {
            if (usageInput) {
                return true;
            }
            else {
                console.log('I think you are forgot to tell us how to use this...');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'credit',
        message: 'Please give credit where it is due! You can include collaborators, tutorials, third-party assets, etc.',
        validate: creditInput => {
            if (creditInput) {
                return true;
            }
            else {
                console.log('Somebody did some work, give them credit.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please enter testing instructions, if any.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose the correct license for your project. If you need help, please refer to (https://choosealicense.com/)',
        choices: ['Apache', 'GPL', 'MIT', 'Public Domain', 'None']
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your github username.',
        validate: githubInput => {
            if (githubInput) {
                return true;
            }
            else {
                console.log('I know you have a github account...');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide a valid email address.',
        validate: emailInput => {
            if (emailInput) {
                return true;
            }
            else {
                console.log('Hey, people might have questions for you.');
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(data) {
    return generateMarkdown(data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(data) {
        console.log(data);
        var fileContent = generateMarkdown(data);
        console.log(fileContent);
        fs.writeFile('./README.md', fileContent, function(err) {
            if (err) throw err
            console.log("README.md created!");
        }
        )
    })
}

// Function call to initialize app
init();
