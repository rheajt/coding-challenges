function solution([s1, s2]) {
  for(let i = 0; i < s1.length; i++) {
    const sub = s1.substring(0, i);
    const end = s1.substring(i);
    if(end + sub === s2) return true;
  }
  return false;
}

module.exports = {
  solution,
  tests: [
    // {title: '', args: [], expects: true},
    {title: '1', args: ['waterbottle', 'erbottlewat'], expects: true},
    {title: '2', args: ['waterbottle', 'bottlewater'], expects: true},
    {title: '3', args: ['abcdefghijklmnop', 'lmnop'], expects: false},
    {title: '4', args: ['defghijklmnopabc', 'abcdefghijklmnop'], expects: true},
    // MAKE SURE YOU TEST EXTREMES
  ]
};
