// node mods
const inquirer = require('inquirer');
const fs = require('fs');
// page creation
const generateHTML = require('./src/generateHTML.js');
// profiles
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Employee = require('./lib/Employee.js');

// array to store objects
// const teamArr = [];

// prompt manager, engineer, intern

const promptManager = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message:"What is the Manager's name? (Required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the manager's name!");
                    return false;
                }
            }
        }
    ])
};

promptManager();