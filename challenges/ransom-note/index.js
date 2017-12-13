class Magazine {
  constructor(data) {
    this.words = {};
    for(let i = 0; i < data.length; i++) {
      this.words[data[i]] = true;
    }
  }

  hasWord(word) {
    if(this.words[word]) {
      delete this.words[word];
      return true;
    } else {
      return false;
    }
  }
}

function solution([magazine, note]) {
  magazine = new Magazine(magazine.split(' '));
  note = note.split(' ');

  for(let i = 0; i < note.length; i++) {
    if(!magazine.hasWord(note[i])) {
        return 'No';
    }
  }

  return 'Yes';
}

module.exports = {
  solution,
  tests: [
    // {title: '', args: '', expects: ''},
    {
      title: 'example input 1',
      args: [
        'give me one grand today night',
        'give one grand today'
      ],
      expects: 'Yes'
    },
    // { title: 'test with random', args: random(-100, 100).oned(20) },
  ]
};
