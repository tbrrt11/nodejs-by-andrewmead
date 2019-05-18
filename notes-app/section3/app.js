const getNotes = require('./notes');
const validator = require('validator');
const chalk = require('chalk');
const chalkAnimation = require('chalk-animation');

console.log(validator.isURL('hot_mail.com'));
console.log(getNotes());
console.log(chalk.blue('Hello ') + chalk.red.bold('World') + chalk.keyword('orange').italic('!'));
console.log(chalk.greenBright.bgYellow('Success!'));
// chalkAnimation.rainbow('LALALALALALALALALAALA').start();
console.log(chalk.red.bold.inverse('Error!'));



