const randoms = require('../../tools/randomizer.js');

function getSlope(x, y) {
  return y / x;
}

function solution(A) {

  if(A.length === 1) return 1;

  let quad1 = new Set();
  let quad2 = new Set();
  let quad3 = new Set();
  let quad4 = new Set();

  for(let i = 0; i < A.length; i++) {
    if(A[i].x < 0 && A[i].y >= 0) {
      quad1.add(getSlope(A[i].x, A[i].y));
    } else if (A[i].x >= 0 && A[i].y >= 0) {
      quad2.add(getSlope(A[i].x, A[i].y));
    } else if (A[i].x >= 0 && A[i].y < 0) {
      quad3.add(getSlope(A[i].x, A[i].y));
    } else {
      quad4.add(getSlope(A[i].x, A[i].y));
    }
  }

  return quad1.size + quad2.size + quad3.size + quad4.size;
}

module.exports = {
  solution,
  tests: [
    // {title: '', args: '', expects: ''},
    {title: 'should be 4 rays', args: [{x: -1, y: -2}, {x: 1, y: 2}, {x: 2, y: 4}, {x: -3, y: 2}, {x: 2, y: -2}], expects: 4},
    {title: 'testing crazy numbers', args: [{x: -1000, y: -2222}, {x: 1111, y: 23322}, {x: 21232, y: 4556}, {x: -312323, y: 2123123}, {x: 2123, y: -2123123}]},
    {title: 'extreme challenge', args: randoms.getObjects(['x', 'y'], -100, 100, 100000)},
  ]
};
