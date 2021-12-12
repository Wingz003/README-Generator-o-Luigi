// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Description
${data.description}

## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [Tests](#Tests)
* [Contributing](#Contributing)
* [Licences](#Licenses)
* [Questions](#Questions)

## Installation Instructions
Please install the following dependencies prior to running the application:

${data.installation}

## Usage Information
Below are the following steps required to run this application:
${}

## Contribution Guidelines

## Test Instructions


## Licenses
${data.license}

`;
}

module.exports = generateMarkdown;
