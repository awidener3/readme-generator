// MODULES
const fs = require('fs');
const inquirer = require('inquirer');

// 
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the name of your project?',
            name: 'title'
        },
        {
            type: 'input',
            message: 'Enter a description of your project:',
            name: 'description'
        },
        {
            type: 'input',
            message: 'Enter any installation instructions:',
            name: 'install'
        },
        {
            type: 'input',
            message: 'Enter usage information:',
            name: 'usage'
        },
        {
            type: 'input',
            message: 'Enter any contributing information:',
            name: 'contribute'
        },
        {
            type: 'input',
            message: 'Enter testing instructions:',
            name: 'testing'
        },
        {
            type: 'list',
            message: 'Please select a license:',
            choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v3.0', 'Mozilla Public License 2.0', 'The Unlicense'],
            name: 'license',
        },
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'username'
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email'
        },
    ])
    .then ((data) => {
        console.log(data);
        fs.writeFile('TESTREADME.md', formatData(data), (err) => {
            err ? console.log(err) : console.log('success');
        })
    })

formatData = (data) => {
    
    let sentence = 
    `# 📝 ${data.title}
${getLicense(data.license)}
📌 [Link to Live Application](https://fakeurl.com)


## 📚 Description
${data.description}

## 📖 Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## 💾 Installation
To install, run the following command in the project terminal:
${'```'}
${data.install}
${'```'}

## 🤝 Usage
${data.usage}



`;
    return sentence;
}

getLicense = (license) => {
    let badge;

    switch (license) {
        case 'Apache License 2.0':
            badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
            break;
        case 'GNU General Public License v3.0':
            badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
            break;
        case 'MIT License':
            badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
            break;
        case 'BSD 2-Clause "Simplified" License':
            badge = '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)';
            break;
        case 'BSD 3-Clause "New" or "Revised" License':
            badge = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
            break;
        case 'Boost Software License 1.0':
            badge = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
            break;
        case 'Creative Commons Zero v1.0 Universal':
            badge = '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)';
            break;
        case 'Eclipse Public License 2.0':
            badge = '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
            break;
        case 'GNU Affero General Public License v3.0':
            badge = '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)';
            break;
        case 'GNU General Public License v2.0':
            badge = '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
            break;
        case 'GNU Lesser General Public License v3.0':
            badge = '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)';
            break;
        case 'Mozilla Public License 2.0':
            badge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
            break;
        case 'The Unlicense':
            badge = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
            break;

        default:
            break;
    }

    return badge;
} 