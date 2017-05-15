var Hamming = function() {

};

Hamming.prototype.compute = function compute(strand1, strand2) {
  function getDifferences(char, index) {
    return char === strand2[index] ? 0 : 1;
  }

  function sumDifferences(sum, difference) {
    return sum + difference;
  }

  return strand1
    .split('')
    .map(getDifferences)
    .reduce(sumDifferences);
};

module.exports = Hamming;
