const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        question: 'What is the title of the project: '
    },
    {
        type: 'input',
        name: 'description',
        question: 'What is the description: '
    },
    {
        type: 'input',
        name: 'installation',
        question: 'How was the project installed: '
    },
    {
        type: 'input',
        name: 'usage',
        question: 'What is the usage of this generator: '
    },
    {
        type: 'input',
        name: 'contribution guidelines',
        question: 'What are the contribution guidelines: '
    },
    {
        type: 'input',
        name: 'instructions',
        question: 'What are the test instructions: '
    }
];

// function to write README file
function writeToFile(fileName, data) {

}

// function to initialize program
async function init() {
    try {
        const answers = await inquirer.prompt(questions);
        const toGenerateMarkdown = generateMarkdown(answers);
        fs.writeFile('createReadMe.md', toGenerateMarkdown);
    } catch(err) {
        throw err;
    }
}

// function call to initialize program
init();
