function Dominator() {
  this.domCurrent = null;
  this.domPos = -1;
  this.vals = {};
  this.multiple = false;

  this.setVal = function(val, ind) {
    if( this.vals[val] ) {
      this.vals[val]++;
    } else {
      this.vals[val] = 1;
    }

    if(!this.vals[this.domCurrent]) {
      this.domCurrent = val;
      this.domPos = ind;
    }

    if(this.vals[this.domCurrent] < this.vals[val]) {
      this.domCurrent = val;
      this.domPos = ind;
    } else if (this.domCurrent !== val && this.vals[this.domCurrent] === this.vals[val]) {
      this.multiple = true;
    }
  }
}


function solution(A) {
  // const arr = A.slice().sort((a, b) => a - b);
  const dom = new Dominator();
  
  for(let i = 0; i < A.length; i++) {
    dom.setVal(A[i], i);
  }
  
  return (dom.vals[dom.domCurrent] > A.length / 2 && !dom.multiple) ? dom.domPos : -1;
}

module.exports = {
  solution,
  tests: [
    // {title: '', args: '', expects: ''}
    { title: 'test the given array', args: [3, 2, 3, 4, 3, 3, 3,-1], expects: 0 },
    // { title: 'test with random', args: Array.from({ length: 100 }, () => Math.floor(Math.random() * 100)) },
  ]
};

/**
 * N is an integer within the range [0..100,000];
    each element of array A is an integer within the range [−2,147,483,648..2,147,483,647].
 */