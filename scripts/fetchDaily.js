const axios = require('axios');
const inquirer = require('inquirer');
const slugify = require('slugify');
const fs = require('fs');

let challenges = [];

const testContent = () => `
import solution, {tests} from './code';

describe('hex-colors', () => {
  tests.forEach((test, ind) => (
    it(\`${ind + 1}): ${test.title}\`, () => {
      const val = solution();
      expect(val).toEqual(test.expects);
    }),
  ))
})
`;

const solutionContent = ({ url, html }) => `
[Project originally posted on reddit.com/r/dailyprogrammer](${url})

${html}
`;

const getExtension = language => {
  switch (language) {
    case 'typescript':
      return '.ts';
    case 'go':
      return '.go';
    default:
      return '.ts';
  }
};

async function fetchDaily(language) {
  const {
    data: { data },
  } = await axios.get('https://www.reddit.com/r/dailyprogrammer.json');

  challenges = data.children.map(each => {
    const { title, selftext: html, created, url } = each.data;
    const date = new Date(created * 1000);

    return { title, html, date, url };
  });

  inquirer
    .prompt([
      {
        type: 'list',
        name: 'challenge',
        message: 'Choose a challenge:',
        choices: challenges.map(challenge => challenge.title),
      },
    ])
    .then(({ challenge }) => handleAnswers(challenge, language));
}

function handleAnswers(challenge, language) {
  const [answer] = challenges.filter(each => each.title === challenge);
  const [_, __, title] = answer.title.split(/\[(.*)\]/);

  const slug = slugify(title.toLowerCase());

  try {
    console.log(title, slug);
    const challengeFolder = `${language}/Daily-Programmer/${slug}`;

    const ext = getExtension(language);

    fs.mkdirSync(challengeFolder);
    fs.writeFileSync(`${challengeFolder}/solution${ext}`);
    fs.writeFileSync(`${challengeFolder}/solution.test${ext}`, testContent());
    fs.writeFileSync(`${challengeFolder}/readme.md`, solutionContent(answer));
  } catch (err) {
    console.error(err.message);
  }
}

module.exports = fetchDaily;
