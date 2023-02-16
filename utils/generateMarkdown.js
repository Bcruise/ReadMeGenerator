// function to generate markdown for README
function generateMarkdown(data) {
  return `## ${data.title}

  # ${data.description}

  # Contents

  1. Installation
  2. Usage
  3. License
  4. Contributing
  5. Tests
  6. Questions


`;
}

module.exports = generateMarkdown;
