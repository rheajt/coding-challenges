// class Randomizer {
//   array(length, min=0, max=100) {
//     return Array.from({length}, () => Math.floor((Math.random() * max) - min))
//   }
// }

module.exports.array = (length, min = 0, max = 100) => {
  return Array.from({ length }, () => Math.floor((Math.random() * max) - min))
};

module.exports.num = (min = 0, max = 10) => Math.floor((Math.random() * max) - min);