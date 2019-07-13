import solution, { tests } from './index';

describe('1.7 Rotate Matrix', function() {
  tests.forEach((test, ind) =>
    it(`${ind + 1}): ${test.title}`, () => {
      const val = solution(test.args);
      expect(val).toEqual(test.expects);
    }),
  );
});
