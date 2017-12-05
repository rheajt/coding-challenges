const random = require('random-array');

// Didn't pass the highest specs
// function solution(A) {
//   return A.filter((a, ind, arr) => arr.indexOf(a) === ind).length;
// }

function solution(A) {
  if (A.length === 0) {
    return 0;
  } else if (A.length === 1) {
    return 1;
  }

  A.sort(function (a, b) {
    return a - b;
  });

  let counter = 1;

  for (let i = 1; i < A.length; i++) {
    if (A[i] !== A[i - 1]) {
      counter++;
    }
  }

  return counter;
}

module.exports = {
  solution,
  tests: [
    // {title: '', args: '', expects: ''}
    { title: 'test the given array', args: [ 2, 2, 1, 3, 1, 1 ], expects: 3 },
    { title: 'test with random', args: random(-100, 100).oned(20) },
    { title: 'test bigger randoms', args: random(-1000, 1000).oned(2000) },
    { title: 'test biggest randoms', args: random(-1000000, 1000000).oned(100000) }
  ]
};

/**
 * N is an integer within the range [0..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].
 */