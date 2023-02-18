// function to generate markdown for README
function generateMarkdown(data, license) {
  return `## ${data.title}

  ${license}

  # Description

  ${data.description}

  ## Table of Contents

  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [License](#license)
  4. [Contributing](#contributing)
  5. [Tests](#tests)
  6. [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  ${data.license}

  ## Contributing

  ${data.contribution}

  ## Tests

  ${data.test}

  ## Questions

  If you have any questions, please don't hesitate to check the repository or contact the email address below.

  GitHub repository - https://github.com/${data.GitHub}
  Email address for further questions - ${data.email}
  
  
  This README.md file was created using Node.
`;
}

module.exports = generateMarkdown;
