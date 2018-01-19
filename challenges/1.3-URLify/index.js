function solution(A) {
  return A.replace(/\s/g, '%20');
}

module.exports = {
  solution,
  tests: [
    // {title: '', args: [], expects: true},
    {
      title: '1',
      args: 'this is an example string',
      expects: 'this%20is%20an%20example%20string'
    },
    // MAKE SURE YOU TEST EXTREMES
  ]
};