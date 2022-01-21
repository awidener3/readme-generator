// MODULES
const fs = require('fs');
const inquirer = require('inquirer');
const questions = require('./questions')
const formatData = require('./render')

// 
runInquirer = () => {inquirer
    .prompt(questions)
    .then ((data) => {
        console.log(data);
        fs.writeFile('output/README.md', formatData(data), (err) => {
            err ? console.log(err) : console.log('success');
        })
    })
};

runInquirer();