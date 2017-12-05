const assert = require('chai').assert;
const solution = require('./index');

describe('dominator - finds index of an array such that its value occurs at more than half of indices in the array.', function() {
  
  solution.tests.forEach((test, ind) => (
    it(`${test.title}`, () => {
      console.time(`Time taken for ${test.title}`);
      const val = solution.solution(test.args);
      console.timeEnd(`Time taken for ${test.title}`);

      if(test.expects) {
        assert.strictEqual(val, test.expects);
      } else {
        assert.exists(val, 'value is neither `null` nor `undefined`');
      }
    })
  ));
})