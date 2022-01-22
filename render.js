formatData = ({ title, description, install, usage, contribute, testing, license, username, email }) =>
`# 📝 ${title}
${getLicense(license)}

📌 [Link to Live Application](https://fakeurl.com)

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description

${description}


## Installation

To install needed packages, run the following command in the project terminal:
${'```'}
${install}
${'```'}

## Usage

${usage}


## License

This project is license under the ${license} License - click on the badge at the top of the page for more info. 

## Contributing

${contribute}

## Tests

${testing}

## Questions

If you have any questions regarding this project, send me an email at ${email}.

Follow me on [GitHub](https://github.com/${username}) for more updates!
`;


// grabs the value of the selected license and returns the markdown syntax for the licenses' badge
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

module.exports = formatData;