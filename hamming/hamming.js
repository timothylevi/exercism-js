var Hamming = function() {

};

Hamming.prototype.compute = function compute(strand1, strand2) {
  if (strand1.length !== strand2.length) {
    throw new Error('DNA strands must be of equal length.');
  }

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
