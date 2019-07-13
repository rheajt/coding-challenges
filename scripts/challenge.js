const inquirer = require('inquirer');
const fetchDaily = require('./fetchDaily');
const createCustom = require('./newChallenge');

const questions = [
  {
    type: 'list',
    name: 'language',
    message: 'Which language will you be doing the challenge in?',
    choices: ['Typescript', 'Go'],
    filter(answer) {
      return answer.toLowerCase();
    },
  },
  {
    type: 'list',
    name: 'source',
    message: 'Where do you want to create the challenge from?',
    choices: ['r/DailyProgrammer', 'Custom'],
  },
  {
    type: 'input',
    name: 'title',
    message: 'Title of your challenge',
    when(answers) {
      return answers.source === 'Custom';
    },
  },
  {
    type: 'input',
    name: 'description',
    message: 'Challenge description',
    when(answers) {
      return answers.source === 'Custom' && answers.title !== null;
    },
  },
];

function createChallenge() {
  inquirer.prompt(questions).then(answers => {
    if (answers.source === 'r/DailyProgrammer') {
      fetchDaily(answers.language);
    }

    if (answers.source === 'Custom') {
      createCustom(answers);
    }
  });
}

createChallenge();
