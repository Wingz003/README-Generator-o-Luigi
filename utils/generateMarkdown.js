

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'None') {
    return '';
  }
  return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./utils/LICENSE)';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink() {
  return '[MIT License](./utils/LICENSE)';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'None') {
    return '';
  } else {
    return `## License
License used for this application:</br>

${renderLicenseLink(license)}
`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
https://github.com/${data.username}/${data.repositoryname}

${renderLicenseBadge(data.license)}

# Description
${data.description}
[![Watch the video](https://watch.screencastify.com/v/KrMn37HOOUJw5HGvOFjY)](https://watch.screencastify.com/v/KrMn37HOOUJw5HGvOFjY))

# Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Tests](#tests)
* [Contributions](#contributions)
* [Licenses](#licenses)
* [Questions](#questions)



## Installation
### You will need to install the following dependencies prior to running the application:</br>

${data.installation}

## Usage 
### Below are the following steps required to run this application:</br>

${data.usage}

## Contributions</br>

${data.contributions}

## Tests
### You will need to take the following steps to initiate the test:</br>

${data.tests}

${renderLicenseSection(data.license)}

## Questions
### If you have a questions or concerns, feel free to contact me at ${data.email}.
`;
}

module.exports = generateMarkdown;
