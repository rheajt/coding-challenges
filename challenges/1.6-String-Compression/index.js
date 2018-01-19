function solution(A) {
  let stack = [];
  let str = '';

  for(let i = 0, x = A.length; i < x; i++) {
    if(!stack.length) {
      stack.push(A[i]);
    } else if(A[i] !== stack[stack.length - 1]) {
      str += `${stack[stack.length - 1]}${stack.length}`;
      stack = [A[i]];
    } else {
      stack.push(A[i]);
    }
  }
  str += `${stack[stack.length - 1]}${stack.length}`;
  return str;
}

module.exports = {
  solution,
  tests: [
    // {title: '', args: [], expects: true},
    {title: '1', args: 'aabcccccaaa', expects: 'a2blc5a3'},
    // MAKE SURE YOU TEST EXTREMES
  ]
};
