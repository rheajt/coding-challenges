
function solution(A) {
  A.reverse();

  const nums = +A.join('') * 17;

  return nums.toString().split('').reduce((a,b) => a = +a + +b, 0);
}

module.exports = {
  solution,
  tests: [
    // {title: '', args: '', expects: ''},
    {title: 'ex 1', args: [3, 5, 1], expects: 9},
    // { title: 'test with random', args: random(-100, 100).oned(20) },
  ]
};
