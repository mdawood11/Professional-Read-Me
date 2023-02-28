// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-yellow.svg)`;
  }
  return "";
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${data.license}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribution](#contribution)
  * [Test](#test)
  * [Contact](#contact)

   
   
  ## Description
  ${data.description}
  
  ## Installation
  ${data.installation}


  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contribution
  ${data.contributing}

  ## Test
  ${data.test}

  ## Contact
  Please reach out if you have any questions.

  - [Github]('https://github.com/${data.github}')
  - [Email]('https://github.com/${data.email}')

  <br/>

  This README was Generated with ❤️ by Mohamad Ghaznawy.


`;
}

module.exports = generateMarkdown;
