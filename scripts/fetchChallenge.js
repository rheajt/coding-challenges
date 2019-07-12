const axios = require('axios');
const inquirer = require('inquirer');
const slugify = require('slugify');
const fs = require('fs');

const POST_FOLDER = './content/posts';
const CHALLENGE_FOLDER = './challenges/Daily-Programmer';

let challenges = [];

async function fetchChallenges() {
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
    .then(handleAnswers);
}

function handleAnswers({ challenge }) {
  const [answer] = challenges.filter(each => each.title === challenge);
  const [_, __, title] = answer.title.split(/\[(.*)\]/);

  const slug = slugify(title.toLowerCase());

  try {
    console.log(title, slug);
    const challengeFolder = `${CHALLENGE_FOLDER}/${slug}`;

    fs.mkdirSync(challengeFolder);
    fs.writeFileSync(`${challengeFolder}/code.js`);
    fs.writeFileSync(
      `${challengeFolder}/code.test.js`,
      `
import solution, {tests} from './code';

describe('hex-colors', () => {
  tests.forEach((test, ind) => (
    it(\`${ind + 1}): ${test.title}\`, () => {
      const val = solution();
      expect(val).toEqual(test.expects);
    }),
  ))
})
    `,
    );
    fs.writeFileSync(
      `${challengeFolder}/readme.md`,
      `
[Project originally posted on reddit.com/r/dailyprogrammer](${answer.url})

${answer.html}
    `.trim(),
    );
  } catch (err) {
    console.error(err.message);
  }
}

fetchChallenges();
