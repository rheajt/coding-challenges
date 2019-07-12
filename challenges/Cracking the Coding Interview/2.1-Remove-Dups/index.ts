class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.count = 0;
  }

  add(data) {
    const node = {
      data,
      next: null,
      prev: null
    };

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

  get length() {
    return `Current count: ${this.count}`;
  }
}

function solution(A) {
  const ll = new LinkedList();

  ll.add(5);
  ll.add(6);
  ll.add(7);
  ll.add(8);

  console.log(ll.length);
}

module.exports = {
  solution,
  tests: [
    // {title: '', args: [], expects: true},
    {title: '1', args: [], expects: true},
    // MAKE SURE YOU TEST EXTREMES
  ]
};
