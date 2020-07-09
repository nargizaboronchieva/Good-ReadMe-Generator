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
                    message: "Please enter badge?",
                    name: "badge",
                    type: "input"
                  },
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
                message: "Who is contributor of your project? ",
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
    
        writeFileAsync('README.md',   
         `
            ${userAnswers.projectTitle}
           

          ![Travis Status]( ${userAnswers.badge})
          
          
          ## Project Title
          ${userAnswers.projectTitle}
          
          ## Description

          ${userAnswers.description}
          
          ## Project Home Page
          [Home Page](${userAnswers.projectHomePage})
          
          ## Table of Contents
          ${userAnswers.tableOfContents}

          ## Author
          ${userAnswers.author}
          
          ## Installation
          ${userAnswers.installation}
          
          ## Usage
          This README Generator is good to create README file for your project on go 
          ${userAnswers.usage}
          
          ## License
          ${userAnswers.license}
          
          ## License URL:
          ${userAnswers.licenseURL}

          
          ## Contributing
          ${userAnswers.contributing}
          
          ## Tests
          ${userAnswers.test}
        
          
          ##  User GitHub profile picture
          ![alt text](${userAnswers.gitHubPicture})

          ## User GitHub email
          ${userAnswers.email}
          nargizaboronchieva@gmail.com
          
          `
        );
    
      } catch (err) {
        console.log(err);
      }
    }
    