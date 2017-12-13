
function solution(S) {
  if(S.length % 2) return 0;

  const toPush = ['{', '[', '('],
        matching = {'}': '{', ']': '[', '(':')'};

  let stack = [];

  for(let i = 0; i < S.length; i++) {
    if(toPush.includes(S[i])) {
      console.log(S[i]);
      stack.push(S[i]);
    } else {
      if(stack.length === 0) {
        return 0;
      } else if(matching[S[i]] !== stack.pop()) {
        return 0;
      }
      console.log(S[i]);
    }
  }

  return stack.length ? 0 : 1;
}

module.exports = {
  solution,
  tests: [
    // {title: '', args: '', expects: ''},
    {title: 'example given', args: '{[()()]}', expects: 1},
    {title: 'example given', args: '([)()]', expects: 0},
    {title: 'odd number of elements in string', args: '{[([)]}}', expects: 0}
  ]
};
