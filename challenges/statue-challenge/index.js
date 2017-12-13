function getSlope(x, y) {
  return y / x;
}

function solution(A) {

  if(A.length === 1) return 1;

  let rays = [
    [],
    [],
    [],
    []
  ];

  for(let i = 0; i < A.length; i++) {
    
    if(A[i].x < 0 && A[i].y >= 0) {
      rays[0].push(getSlope(A[i].x, A[i].y));
    } else if (A[i].x >= 0 && A[i].y >= 0) {
      rays[1].push(getSlope(A[i].x, A[i].y));
      
    } else if (A[i].x >= 0 && A[i].y < 0) {
      rays[2].push(getSlope(A[i].x, A[i].y));
      
    } else {
      rays[3].push(getSlope(A[i].x, A[i].y));
    }
  }

  let rayCount = 0;
  for(let j = 0; j < rays.length; j++) {
    rays[j] = rays[j].filter((ray, ind, arr) => arr.indexOf(ray) === ind);
    rayCount += rays[j].length;
  }

  return rayCount;
}

module.exports = {
  solution,
  tests: [
    // {title: '', args: '', expects: ''},
    {title: 'should be 4 rays', args: [{x: -1, y: -2}, {x: 1, y: 2}, {x: 2, y: 4}, {x: -3, y: 2}, {x: 2, y: -2}], expects: 4},
    {title: 'should be 4 rays', args: [{x: -1000, y: -2222}, {x: 1111, y: 23322}, {x: 21232, y: 4556}, {x: -312323, y: 2123123}, {x: 2123, y: -2123123}]},
    // { title: 'test with random', args: random(-100, 100).oned(20) },
  ]
};
