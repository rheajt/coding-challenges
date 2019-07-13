function solution(A) {
  let rows = {}, columns = {};

  for(let i = 0, x = A.length; i < x; i++) {
    for(let j = 0, y = A[i].length; j < y; j++) {
      if(!A[i][j]) {
        rows[i] = true;
        columns[j] = true;
      }
    }
  }

  for(let row in rows) {
    if(row) {
      for(let i = 0, x = A[0].length; i < x; i++) {
        A[row][i] = 0;
      }
    }
  }

  for(let column in columns) {
    if(column) {
      for(let i = 0, x = A.length; i < x; i++) {
        A[i][column] = 0;
      }
    }
  }

  console.log(A);
  return A;
}

module.exports = {
  solution,
  tests: [
    // {title: '', args: [], expects: true},
    {title: '1', args: [
      [0, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1],
      [0, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 0, 1, 1, 1, 1],
    ]},
    // MAKE SURE YOU TEST EXTREMES
  ]
};
