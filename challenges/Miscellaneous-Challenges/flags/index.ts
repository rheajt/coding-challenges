class Peaks {
  constructor() {
    this.head = null;
    this.tail = null;
    this.count = 0;
  }

  add(data) {
    let node = {
      data,
      next: null,
      prev: null
    }

    if(!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }

    this.count++;
  }

  show() {
    let peaks = [];
    let current = this.head;

    while(current) {
      peaks.push(`pos: ${current.data.pos}, height: ${current.data.ht}`);
      current = current.next;
    }

    return peaks.join('\n');
  }

  length() {
    return this.count;
  }

  countFlags(fn) {
    if(fn) {
      let current = this.head;

      let flags = 0;

      while(current) {
        flags += fn(current);

        current = current.next;
      }

      return flags;
    }
  }
}

function solution(A) {
  var peaks = new Peaks();

  let flagCounts = [];

  for(let i = 1; i < A.length - 1; i++) {
    if(A[i] > A[i - 1] && A[i] > A[i + 1]) {
      peaks.add({ht: A[i], pos: i});
    }
  }

  for(let i = 2; i <= peaks.length(); i++) {
    let flags = peaks.setFlags(current => {
      if(!current.prev) {
        current.data.flagSet = true;
        return 1;
      }
    }, 0);

    console.log(flags);
    flagCounts.push(flags);
  }

  console.log(peaks.show());

  console.log(flagCounts);
  return 5;
}

module.exports = {
  solution,
  tests: [
    {title: 'example', args: [1, 5, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2], expects: 3}
  ]
}