class Palindrome {
  constructor(str) {
    this.letters = this.countLetters_(str);
  }

  countLetters_(str) {
    let obj = {};
    for(let i = 0, x = str.length; i < x; i++) {
      if(obj.hasOwnProperty(str[i])) {
        obj[str[i]]++;
      } else {
        obj[str[i]] = 1;
      }
    }
    return obj;
  }

  isPalindrome() {
    let oddCount = 0;
    for(let letter in this.letters) {
      if(this.letters[letter] % 2 !== 0) oddCount++;
    }

    return (oddCount > 1) ? false : true;
  }
}

function solution(A) {
  const pal = new Palindrome(A.replace(/\s+/g, ''));

  return pal.isPalindrome();
}

module.exports = {
  solution,
  tests: [
    // {title: '', args: [], expects: true},
    {title: '1', args: 'taco cat', expects: true},
    // MAKE SURE YOU TEST EXTREMES
  ]
};
