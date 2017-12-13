// split if it goes up AND it is higher than the end of the last group
const randomizer = '../../tools/randomizer.js';


function solution(A) {
  let giraffeGroups = [];
  let currentGroup = [];

  for(let i = 0; i < A.length; i++) {
    if(A[i] > A[i + 1]) {
      currentGroup.push(A[i]);
    } else {
      currentGroup.push(A[i]);
      giraffeGroups.push(currentGroup);
      currentGroup = [];
    }
  }

  return giraffeGroups.length;
}

module.exports = {
  solution,
  tests: [
    // {title: '', args: '', expects: ''},
    {title: 'ex 1', args: [1, 5, 4, 9, 8, 7, 12, 13, 14], expects: 6},
    {title: 'ex 2', args: [4, 3, 2, 6, 1], expects: 1},
    // { title: 'test with random', args: random(-100, 100).oned(20) },
  ]
};
