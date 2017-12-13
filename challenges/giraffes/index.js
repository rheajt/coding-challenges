// split if it goes up AND it is higher than the end of the last group
const randomizer = require('../../tools/randomizer.js');

function solution(A) {
  let giraffeGroups = [];
  let currentGroup = [];

  let maxCount = maxCurrent = 0;

  for(let i = 0; i < A.length; i++) {
    if(A[i] > A[i + 1]) {
      currentGroup.push(A[i]);
    } else {
      if(maxCount > A[i]) {
        return 1;
      } else {
        currentGroup.push(A[i]);
        giraffeGroups.push(currentGroup);
        currentGroup = [];

      }
    }
    maxCount = Math.max(maxCount, A[i]);
  }

  return giraffeGroups.length;
}

module.exports = {
  solution,
  tests: [
    // {title: '', args: '', expects: ''},
    {title: 'ex 1', args: [1, 5, 4, 9, 8, 7, 12, 13, 14], expects: 6},
    {title: 'ex 2', args: [4, 3, 2, 6, 1], expects: 1},
    // {title: 'random example of 100 values', args: randomizer.array(100)}
    // { title: 'test with random', args: random(-100, 100).oned(20) },
  ]
};
