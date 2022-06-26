const inquirer = require('inquirer');
const fs = require('fs')
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./src/page-template.js')

let teamManager = [];
let engineerArr = [];
let internArr = [];

const initializeApp = () => {
    return inquirer
    // ask questions for manager: team manager's name, employee id, email, and office number
    .prompt([
        {
            type: 'text',
            name: 'name',
            message: "What is the team manager's name?"
        },
        {
            type: 'text',
            name: 'id',
            message: "What is the team manager's employee id?"
        },
        {
            type: 'text',
            name: 'email',
            message: "What is the team manager's email?"
        },
        {
            type: 'text',
            name: 'officeNumber',
            message: "What is the team manager's office number?"
        },
    ])
    .then(({ name, id, email, officeNumber }) => {
        this.manager = new Manager(name, id, email, officeNumber);
        teamManager.push(this.manager);
    })
};

const addEmployee = () => {
    return inquirer
    .prompt({
        type: 'list',
        name: 'addEmployee',
        message: 'Would you like to add an employee? If so, please choose which type! If you are finished, select "Finished" to generate your team portfolio.',
        choices: ['Engineer', 'Intern', 'Finished']
    })
    .then(answer => {
        if (answer.addEmployee === 'Engineer') {
            addEngineer();
        } else if (answer.addEmployee === 'Intern') {
            addIntern();
        } else {
            console.log("I'm DUMB!!")
            writeToFile();
        }
    })
};

const addEngineer = () => {
    console.log('ENGINEER!');
    return inquirer
    .prompt([
        {
            type: 'text',
            name: 'name',
            message: "What is the engineer's name?"
        },
        {
            type: 'text',
            name: 'id',
            message: "What is the engineer's employee id?"
        },
        {
            type: 'text',
            name: 'email',
            message: "What is the engineer's email?"
        },
        {
            type: 'text',
            name: 'github',
            message: "What is the engineer's GitHub username?"
        },
    ])
    .then(({ name, id, email, github }) => {
        this.engineer = new Engineer(name, id, email, github);
        engineerArr.push(this.engineer);
        
        addEmployee();
    })
};

const addIntern = () => {
    console.log('INTERN!');
    return inquirer
    .prompt([
        {
            type: 'text',
            name: 'name',
            message: "What is the intern's name?"
        },
        {
            type: 'text',
            name: 'id',
            message: "What is the intern's employee id?"
        },
        {
            type: 'text',
            name: 'email',
            message: "What is the intern's email?"
        },
        {
            type: 'text',
            name: 'school',
            message: "What is the intern's alma mater?"
        },
    ])
    .then(({ name, id, email, school }) => {
        this.intern = new Intern(name, id, email, school);
        internArr.push(this.intern);

        addEmployee();
    })
};

function writeToFile() {
    const employeeData = generateHTML(teamManager, engineerArr, internArr)
    fs.writeFile('./dist/index.html', employeeData , err => {
        if (err) {
            console.log(err)
        } else {
            console.log("Your team portfolio has been created!")
        }
    });
}

initializeApp()
.then(addEmployee)