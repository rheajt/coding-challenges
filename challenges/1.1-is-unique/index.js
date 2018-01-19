function solution(A) {
  const words = A.split(' ');

  for(let i = 0, x = words.length; i < x; i++) {
    if(words.indexOf(words[i]) !== i) return false;
  }

  return true;
}

module.exports = {
  solution,
  tests: [
    // {title: '', args: '', expects: ''},
    {title: 'ex 1', args: 'this is a unique string', expects: true},
    {title: 'ex 2', args: 'this is is a unique string', expects: false},
    // { title: 'test with random', args: random(-100, 100).oned(20) },
  ]
};
