
const assert = require('chai').assert;
const solution = require('./index');

describe('strange', function() {
  
  solution.tests.forEach((test, ind) => (
    it(`${ test.title }`, () => {
      console.log('\n\n');
      console.time(`Time taken for ${ test.title }`);
      const val = solution.solution(test.args);
      console.timeEnd(`Time taken for ${ test.title }`);

      if(test.expects) {
        assert.strictEqual(val, test.expects);
      } else {
        console.log(`The returned value is: ${ val }`);
        assert.exists(val, 'value is neither null nor undefined');
      }
    })
  ));
})
