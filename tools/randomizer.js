module.exports = function() {
  this.array = (length, min = 0, max = 100) => {
    return Array.from({ length }, () => Math.floor((Math.random() * max) - min))
  };

  this.num = (min = 0, max = 10) => Math.floor((Math.random() * max) - min);

  this.words = (wordLength, wordCount) => {
    const arr = [];
    return arr;
  }
}