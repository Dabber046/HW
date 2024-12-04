const fs = require("fs");
const inquirer = require("inquirer");

// License options with corresponding badges and notices
const licenses = {
  MIT: {
    badge: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    notice: "This application is covered under the MIT License."
  },
  GPLv3: {
    badge: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    notice: "This application is covered under the GPLv3 License."
  },
  Apache: {
    badge: "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    notice: "This application is covered under the Apache License 2.0."
  },
  None: {
    badge: "",
    notice: "This application is not covered by any license."
  }
};

// Questions for the user input
const questions = [
  { type: "input", name: "title", message: "What is the title of your project?" },
  { type: "input", name: "description", message: "Provide a description of your project:" },
  { type: "input", name: "installation", message: "Provide installation instructions:" },
  { type: "input", name: "usage", message: "Provide usage information:" },
  {
    type: "list",
    name: "license",
    message: "Choose a license for your project:",
    choices: ["MIT", "GPLv3", "Apache", "None"]
  },
  { type: "input", name: "contributing", message: "Provide contribution guidelines:" },
  { type: "input", name: "tests", message: "Provide test instructions:" },
  { type: "input", name: "github", message: "Enter your GitHub username:" },
  { type: "input", name: "email", message: "Enter your email address:" }
];

// Function to generate the README content
const generateREADME = ({ title, description, installation, usage, license, contributing, tests, github, email }) => `
# ${title}

${licenses[license].badge}

## Description
${description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${installation}

## Usage
${usage}

## License
${licenses[license].notice}

## Contributing
${contributing}

## Tests
${tests}

## Questions
For any questions, please reach out:

- GitHub: [${github}](https://github.com/${github})
- Email: [${email}](mailto:${email})
`;

// Main application function
const init = () => {
  inquirer.prompt(questions).then((answers) => {
    const readmeContent = generateREADME(answers);

    fs.writeFile("README.md", readmeContent, (err) => {
      if (err) {
        console.error("Error writing README.md:", err);
      } else {
        console.log("README.md has been generated!");
      }
    });
  });
};

// Initialize the application
init();
