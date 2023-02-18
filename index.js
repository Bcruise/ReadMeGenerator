const fs = require("fs");
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
        question: 'How can the project be installed: '
    },
    {
        type: 'input',
        name: 'usage',
        question: 'How should the application be used: '
    },
    {
        type: 'input',
        name: 'contribution',
        question: 'What are the contribution guidelines: '
    },
    {
        type: 'input',
        name: 'test',
        question: 'Which testing protociks did you use: '
    },
    {
        type: 'input',
        name: 'GitHub',
        question: 'What is your GitHub username: '
    },
    {
        type: 'input',
        name: 'email',
        question: 'What is your email address so users can reach out for further questions: '
    },
    {
        type: 'list',
        name: 'license',
        question: 'Which license did you use for this project: ',
        choices: [
            'GNU AGPLv3',
            'GNU GPLv3',
            'Mozilla',
            'Apache',
        ]
    }
];

// function to determine which badge to use
function whichLicenseBadge(data) {    
    let license = '';
    if (data == 'GNU AGPLv3') {
        license = '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)';
        return license;
    } else if (data == 'GNU GPLv3') {
        license = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
        return license;
    } else if (data == 'Mozilla') {
        license = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
        return license;
    } else if (data == 'Apache') {
        license = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
        return license;
    }
}


// function to initialize program
async function init() {
    try {
        const answers = await inquirer.prompt(questions);
        let license = whichLicenseBadge(answers.license);
        console.log(license);
        const toGenerateMarkdown = generateMarkdown(answers, license);
        fs.writeFileSync('README.md', toGenerateMarkdown);
    } catch(err) {
        throw err;
    }
}

// function call to initialize program
init();
