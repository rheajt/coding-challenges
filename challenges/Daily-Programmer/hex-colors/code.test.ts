import { hexcolor, blend, tests } from './code';

describe('hex-colors', () => {
  tests.forEach((test, ind) =>
    it(`${ind + 1}): ${test.title}`, () => {
      const [red, green, blue] = test.args;
      const val = hexcolor(red, green, blue);
      expect(val).toEqual(test.expects);
    }),
  );
});
