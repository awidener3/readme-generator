// MODULES
const fs = require('fs');
const inquirer = require('inquirer');
const questions = require('./questions')
const formatData = require('./render')

// FUNCTIONS

// runs inquirer package prompting user via CLI
runInquirer = () => {
    inquirer.prompt(questions).then((data) => {
        // writes to a file in the output folder, also has handling for errors
        fs.writeFile('output/README.md', formatData(data), (err) => err ? console.log(err) : console.log('success'))
    })
};

runInquirer();