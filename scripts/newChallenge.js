const fs = require('fs');
const slugify = require('slugify');

const [title, description] = process.argv.slice(2);

const indexStr = `
export default function solution(A) {}

export const tests = [
  // {title: '', args: [], expects: true},
  // MAKE SURE YOU TEST EXTREMES
];
`;

const testStr = `
import solution, {tests} from './index';

describe(\'${title}\', () => {
  tests.forEach((test, ind) =>
    it(\`${ind + 1}): ${test.title}\`, () => {
      const val = solution(test.args);
      expect(val).toEqual(test.expects);
    }),
  );
})
`;

const readmeStr = `# ${title}

${description}
`;

const dir = `${process.cwd()}/challenges/Miscellaneous-Challenges/${slugify(
  title,
)}`;

const index = `${dir}/index.js`;
const test = `${dir}/index.test.js`;
const readme = `${dir}/readme.md`;

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
  fs.writeFileSync(index, indexStr);
  fs.writeFileSync(test, testStr);
  fs.writeFileSync(readme, readmeStr);
}
