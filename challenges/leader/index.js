function solution(A) {
  // write your code in JavaScript (Node.js 4.0.0)

  var stack = [];
  var arr = JSON.parse(JSON.stringify(A));
  var i = 0;

  if (A.length < 2) {
    return 0;
  }

  arr.sort(function (a, b) {
    return a - b;
  });
  stack.push(arr[0]);

  for (i = 1; i < arr.length; i++) {
    if (stack.length === 0) {
      stack.push(arr[i]);
    } else {
      var last = stack.pop();

      if (last === arr[i]) {
        stack.push(last);
        stack.push(arr[i]);
      }
    }
  }

  if (stack.length === 0) {
    return 0;
  }

  var candidate = stack[0];
  var counter = 0;
  var pos = [];
  var sum = [];
  for (i = 0; i < A.length; i++) {
    if (A[i] === candidate) {
      counter++;
      pos.push(i);
    }

    sum.push(counter);
  }

  var equi = [];
  if (counter <= parseInt(A.length / 2)) {
    return 0;
  } else {
    for (i = 0; i < sum.length; i++) {
      var leftMin = parseInt((i + 1) / 2);
      var rightMin = parseInt((sum.length - i - 1) / 2);

      if (sum[i] > leftMin && (counter - sum[i]) > rightMin) {
        equi.push(i);
      }
    }
  }

  return equi.length;
}

module.exports = {
  solution,
  tests: [
    // {title: '', args: '', expects: ''},
    {title: 'example values', args: [4,3,4,4,4,2], expects: 2},
    { title: 'test with random', args: Array.from({length: 40}, () => Math.floor(Math.random() * 40)) },
  ]
};
