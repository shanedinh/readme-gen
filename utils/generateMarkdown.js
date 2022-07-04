// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Apache") {
    return `![License: Apache](https://img.shields.io/badge/license-Apache-green?style=for-the-badge&logo=appveyor)`
  }
  else if (license === "GNU") {
    return `![License: GPL](https://img.shields.io/badge/license-GPL-green?style=for-the-badge&logo=appveyor)`
  }
  else if (license === "MIT") {
    return `![License: MIT](https://img.shields.io/badge/license-MIT-green?style=for-the-badge&logo=appveyor)`
  }
  else if (license === "Public Domain") {
    return `![License:Public Domain](https://img.shields.io/badge/license-Public%20Domain-lightgrey?style=for-the-badge&logo=appveyor)`
  }
  else {
    return "";
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "Apache") {
    return "https://opensource.org/licenses/Apache-2.0"
  }
  else if (license === "GPL") {
    return "https://opensource.org/licenses/gpl-license"
  }
  else if (license === "MIT") {
    return "https://opensource.org/licenses/MIT"
  }
  else if (license === "Public Domain") {
    return "https://wiki.creativecommons.org/wiki/public_domain"
  }
  else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return license;
  }
  else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [Testing](#test)
  * [License](#license)
  * [Questions](#questions)

  ## Description
  ${data.description}
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Credits
  ${data.credits}

  ## License
  ${renderLicenseBadge(data.license)}

  #### For additonal information: <br>
  ${renderLicenseSection(data.license)}:
  ${renderLicenseLink(data.license)}

  ## Questions
  * GitHub: [${data.github}](https://github.com/${data.github})
  * Email: [${data.email}](mailto:${data.email})

`;
}

module.exports = generateMarkdown;
