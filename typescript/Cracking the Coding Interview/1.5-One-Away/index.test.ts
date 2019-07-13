import solution, { tests } from './index';

describe('1.5 One Away', function() {
  tests.forEach((test, ind) =>
    it(`${ind + 1}): ${test.title}`, () => {
      const val = solution(test.args);
      expect(val).toEqual(test.expects);
    }),
  );
});
