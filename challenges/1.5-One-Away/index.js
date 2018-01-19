function solution([A, B]) {
  //insert a character
  //remove a character
  //replace a character
  if(A === B) return true;

  const maxLen = Math.max(A.length, B.length);

  if(maxLen - A.length > 1 || maxLen - B.length > 1) {
    return false;
  }

  let diffs = 0;
  for(let i = 0; i < maxLen; i++) {

  }
}

module.exports = {
  solution,
  tests: [
    // {title: '', args: [], expects: true},
    {title: '1', args: ['pale', 'ple'], expects: true},
    {title: '2', args: ['pales', 'pale'], expects: true},
    {title: '3', args: ['pale', 'bake'], expects: false},
    {title: '4', args: ['pales', 'pales'], expects: true},
    {title: '5', args: ['pales', 'palestttt'], expects: false},
    // MAKE SURE YOU TEST EXTREMES
  ]
};
