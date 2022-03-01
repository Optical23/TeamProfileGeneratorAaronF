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
//These arrays have to be separate so the html template can map them and run different templates
let engineer = [];
let intern = [];
let manager = [];
let employees = {engineer,intern,manager};
//Function of the program the questioning for building the team starts here
async function buildTeam() {
    //first acquiring the job is needed to edit the set of prompts
    const {job} = await inquirer.prompt([
        {
            type: 'list',
            name: 'job',
            message: 'What is the job of this Employee?',
            choices: ['Manager', 'Engineer', 'Intern']
        }
    ]);
    //A switch case to cut down the code of if else statements
    switch (job) {
        case 'Manager':
            //... es6 spread operator makes assembling a new array to run inquirer prompt with easy
            var questions = [...baseQuestions, ...managerQuestions, ...moreEmployees];
            return inquirer.prompt(questions)
            //after getting the data makes a new Manager object and saves it to manager array
            .then(({employeeName,id,email,officeNumber,moreEmployees}) => {
                manager.push(new Manager(employeeName, id, email, officeNumber));
                //if moreEmployees is true the program will continue to run and add more employees
                if (moreEmployees){return buildTeam();};
            });
        case 'Engineer':
            //same process as manager^
            var questions = [...baseQuestions, ...engineerQuestions, ...moreEmployees];
            return inquirer.prompt(questions)
            .then(({employeeName,id,email,github,moreEmployees}) => {
                engineer.push(new Engineer(employeeName, id, email, github));
                if (moreEmployees){return buildTeam();};
            });
        case 'Intern':
            //same process as manager^
            var questions = [...baseQuestions, ...internQuestions, ...moreEmployees];
            return inquirer.prompt(questions)
            .then(({employeeName,id,email,school,moreEmployees}) => {
                intern.push(new Intern(employeeName, id, email, school));
                if (moreEmployees){return buildTeam();};
            });
    }
};
buildTeam().then(function() {
    //then fill html templates with employee data
    return templateHTML(employees)
}).then(htmlMade => {
    //make file with html template data and check for errors
    return fs.writeFile('./dist/index.html', htmlMade, err => {
        if(err){
            console.log(err);
            return;
        }else{
            console.log("HTML is created with your team's information");
        }
    })
})