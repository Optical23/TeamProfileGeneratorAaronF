//node modules needed to run program
const inquirer = require('inquirer');
const fs = require('fs');
//Templates and classes 
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const templateHTML = require('./src/htmlTemplate');
const {baseQuestions,managerQuestions,internQuestions,engineerQuestions,moreEmployees} = require('./prompts');
//Data storage
let engineer = [];
let intern = [];
let manager = [];
let employees = {engineer,intern,manager};

async function buildTeam() {
    const {job} = await inquirer.prompt([
        {
            type: 'list',
            name: 'job',
            message: 'What is the job of this Employee?',
            choices: ['Manager', 'Engineer', 'Intern']
        }
    ]);
    switch (job) {
        case 'Manager':
            var questions = [...baseQuestions, ...managerQuestions, ...moreEmployees];
            return inquirer.prompt(questions)
            .then(({employeeName,id,email,officeNumber,moreEmployees}) => {
                manager.push(new Manager(employeeName, id, email, officeNumber));
                if (moreEmployees){return buildTeam();};
            });
        case 'Engineer':
            var questions = [...baseQuestions, ...engineerQuestions, ...moreEmployees];
            return inquirer.prompt(questions)
            .then(({employeeName,id,email,github,moreEmployees}) => {
                engineer.push(new Engineer(employeeName, id, email, github));
                if (moreEmployees){return buildTeam();};
            });
        case 'Intern':
            var questions = [...baseQuestions, ...internQuestions, ...moreEmployees];
            return inquirer.prompt(questions)
            .then(({employeeName,id,email,school,moreEmployees}) => {
                intern.push(new Intern(employeeName, id, email, school));
                if (moreEmployees){return buildTeam();};
            });
    }
};
buildTeam().then(function() {
    return templateHTML(employees)
}).then(htmlMade => {
    return fs.writeFile('./dist/index.html', htmlMade, err => {
        if(err){
            console.log(err);
            return;
        }else{
            console.log("HTML is created with your team's information");
        }
    })
})