const chance = require('chance').Chance();

const getArray = (length, min = 0, max = 100) => {
  return Array.from({ length }, () => chance.integer({min, max}));
};

/**
 * Get a random number from min and max
 * @param {number} min 
 * @param {number} max 
 */
const getNum = (min = 0, max = 10) => chance.integer({min, max});

/**
 * Get a bunch of random words
 * @param {number} wordLength 
 * @param {number} wordCount 
 * @return array of words made up of random letters
 */
const getWords = (wordLength = 5, wordCount = 1) => {
  const letters = 'abcdefghijklmnopqrstuvwxyz';

  let words = [];
  let word = [];
  for(let j = 0; j < wordCount; j++) {
    for(let i = 0; i < wordLength; i++) {
      word.push(letters[getNum(0, 25)]);
    }
    words.push(word.join(''));
    word = [];
  }

  return words;
};

/**
 * Get an array of objects
 * @param {*} keys 
 * @param {*} min 
 * @param {*} max 
 */
const getObjects = (keys = [], min = 0, max = 100, count = 10) => {
  let objs = [];

  for(let j = 0; j < count; j++) {
    let obj = {};
    for(let i = 0; i < keys.length; i++) {
      obj[keys[i]] = getNum(min, max);
    }
    objs.push(obj);
  }

  return objs;
};

module.exports = {
  getArray,
  getNum,
  getWords,
  getObjects
}