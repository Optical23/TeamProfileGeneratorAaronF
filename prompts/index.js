
const baseQuestions = [{
    type: 'text',
    name: 'employeeName',
    message: `What is the Employee's name?`
},
{
    type: 'text',
    name: 'id',
    message: `What is the Employee's ID number?`
},
{
    type: 'text',
    name: 'email',
    message: `What is the Employee's email?`
}];

const managerQuestions = [{
    type: 'text',
    name: 'officeNumber',
    message: "What is the Manager's office number?"
}];

const internQuestions = [{
    type: 'text',
    name: 'school',
    message: "What is the Intern's school?"
}];

const engineerQuestions = [{
    type: 'text',
    name: 'github',
    message: "Please enter the Engineer's github username."
}];

const moreEmployees = [{
    type: 'confirm',
    name: 'moreEmployees',
    message: "Would you like to add another employee",
    default: false
}]

const Prompts = {baseQuestions,managerQuestions,internQuestions,engineerQuestions,moreEmployees};

module.exports = Prompts;