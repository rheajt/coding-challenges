class LetterHash {
  constructor(str) {
    this.letters = this.counts_(str);
  }

  counts_(str) {
    let hash = {};

    for (let letter of str) {
      if (hash.hasOwnProperty(letter)) {
        hash[letter]++;
      } else {
        hash[letter] = 1;
      }
    }

    return hash;

  }
}

function solution([A, B]) {
  if (A.length !== B.length) return false;

  let a = new LetterHash(A);
  let b = new LetterHash(B);

  //loop over the letters
  for(let i = 0, x = A.length; i < x; i++) {
    if(a.letters[A[i]] !== b.letters[B[i]]) return false;
  }

  return true;
}

module.exports = {
  solution,
  tests: [
    // {title: '', args: [], expects: true},
    {
      title: '1',
      args: ['string', 'gnirts'],
      expects: true
    },
    {
      title: '2',
      args: ['string', 'gstrni'],
      expects: true
    },
    {
      title: '3',
      args: ['string', 'less'],
      expects: false
    },
    {
      title: '4',
      args: ['string', 'letter'],
      expects: false
    },
    {
      title: '5',
      args: ['string', 'ritnsg'],
      expects: true
    },
    // MAKE SURE YOU TEST EXTREMES
  ]
};