const fs = require("fs");


const util = require("util");
const inquirer = require("inquirer");
const writeFileAsync = util.promisify(fs.writeFile);

    userPrompts();
    
    async function userPrompts() {
      try {
            const  userAnswers  = await inquirer.prompt(
            [
             {
                message: "What is the title of your project?",
                name: "projectTitle",
                type: "input"
              },
              {
                message: "Describe your project?",
                name: "description",
                type: "input"
              },
              {
                message: "Please provide with the link of project home page?",
                name: "projectHomePage",
                type: "input"
              },
              {
                message: "Please enter your table of content?",
                name: "tableOfContents",
                type: "input"
              }, 
              {
                message: "What is name of author?",
                name: "author",
                type: "input"
              }, 
              {
                message: "How to install the project?",
                name: "installation",
                type: "input"
              },
              {
                message: "What is your project used for? ",
                name: "usage",
                type: "input"
              },
              {
                message: "Please enter the license of the project? ",
                name: "license",
                type: "input"
              },
              {
                message: "Please provide your license URL? ",
                name: "licenseURL",
                type: "input"
              },
              {
                message: "How to contribute to your project? ",
                name: "contributing",
                type: "input"
              },
            
              {
                message: "Test",
                name: "test",
                type: "input"
              },
            
              {
                message: "Please give the link to your GITHUb picture",
                name: "gitHubPicture",
                type: "input"
              },
              {
                message: "What is your GitHub email? ",
                name: "email",
                type: "input"
              },
            
            ]

        );
    
writeFileAsync('README.md', `
## ![GitHub](https://img.shields.io/github/license/nargizaboronchieva/Good-ReadMe-Generator?color=red&label=Good%20README%20Generator&style=for-the-badge)
 ${userAnswers.projectTitle}
           

[![ForTheBadge uses-js](http://ForTheBadge.com/images/badges/uses-js.svg)](http://ForTheBadge.com)


## Project Title:
${userAnswers.projectTitle}

## Description:

${userAnswers.description}

## Project Home Page:
[Press this link for Project Home Page] (${userAnswers.projectHomePage})

          
## Table of Contents:
${userAnswers.tableOfContents}

## Author:
${userAnswers.author}
          
## Installation:
          
${userAnswers.installation}
          
          
## Usage:
          
This README Generator is good to create README file for your project on go 
          
${userAnswers.usage}
          
          
##  ![GitHub](https://img.shields.io/github/license/nargizaboronchieva/Good-ReadMe-Generator?color=gr&style=for-the-badge) License :         
${userAnswers.license}
          
          
## License URL:         
${userAnswers.licenseURL}
      
          
## Contributing :      
${userAnswers.contributing}
          
          
## Tests:
${userAnswers.test}
        
          
##  User GitHub profile picture:
![alt text](${userAnswers.gitHubPicture})

## User GitHub email:
${userAnswers.email}
          
[![ForTheBadge built-with-love](http://ForTheBadge.com/images/badges/built-with-love.svg)](https://GitHub.com/nargizaboronchieva/)

 
          `
        );
    
      } catch (err) {
        console.log(err);
      }
    }
    