const fs = require('fs');

const [title, description] = process.argv.slice(2);

const indexStr = `
function solution(A) {}

module.exports = {
  solution,
  tests: [
    // {title: '', args: '', expects: ''},
    // { title: 'test with random', args: random(-100, 100).oned(20) },
  ]
};
`;

const testStr = `
const assert = require('chai').assert;
const solution = require('./index');

describe(${title}, function() {
  
  solution.tests.forEach((test, ind) => (
    it(\`\${ test.title }\`, () => {
      console.time(\`Time taken for \${ test.title }\`);
      const val = solution.solution(test.args);
      console.timeEnd(\`Time taken for \${ test.title }\`);

      if(test.expects) {
        assert.strictEqual(val, test.expects);
      } else {
        assert.exists(val, 'value is neither null nor undefined');
      }
    })
  ));
})
`;

const dir = `../challenges/${title}`;

const index = `${dir}/index.js`;
const test = `${dir}/index.test.js`;
const readme = `${dir}/readme.md`;

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
  fs.writeFileSync(index, indexStr);
  fs.writeFileSync(test, testStr);
  fs.writeFileSync(readme);
}

