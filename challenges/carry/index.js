const randoms = require('../../tools/randomizer');

function solution([first, second]) {
  if(first == 0 || second == 0) return 0;

  first = first.toString().split('').reverse();
  second = second.toString().split('').reverse();
  
  let carries = 0;
  let carryBox = 0;
  let numberLength = first.length > second.length ? first.length : second.length;
  for(let i = 0; i < numberLength; i++) {
    first[i] = +first[i] || 0;
    second[i] = +second[i] || 0;

    carries += carryBox;

    const sum = first[i] + second[i] + carryBox;

    if(sum >= 10) {
      carryBox = 1;

      if(i === numberLength - 1) {
        carries++;
      }
    } else {
      carryBox = 0;
    }
  }

  return carries;
}

module.exports = {
  solution,
  tests: [
    // {title: '', args: '', expects: ''},
    { title: "first example", args: [55, 65], expects: 2 },
    { title: "second example", args: [55, 29], expects: 1 },
    { title: "random example 1", args: randoms.getArray(2, 100000, 1000000) },
    { title: "random example 2", args: [12567, 9999], expects: 4 },
    { title: "random example 3", args: [125670, 99999], expects: 4 },
    {
      title: "random example SUPER",
      args: [randoms.getNum(0, 1000000), randoms.getNum(0, 1000000)]
    },
    { title: "1", args: [123, 456], expects: 0 },
    { title: "2", args: [555, 555], expects: 3 },
    { title: "3", args: [900, 11], expects: 0 },
    { title: "4", args: [145, 55], expects: 2 },
    { title: "5", args: [0, 0], expects: 0 },
    { title: "6", args: [101, 809], expects: 1 },
    { title: "7", args: [1, 999999], expects: 6 },
    { title: "7.2", args: [1, 998999], expects: 3 },
    { title: "8", args: [999045, 1055], expects: 5 }

    // { title: 'test with random', args: randoms.getNum(-100, 100) },
  ]
};
