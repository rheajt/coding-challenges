import solution, { tests } from './index';

describe('1.1-is-unique', function() {
  tests.forEach((test, ind) =>
    it(`${test.title}`, () => {
      const val = solution(test.args);
      expect(val).toEqual(test.expects);
    }),
  );
});
