var Pangram = function(sentence) {
  this.ALPHABET_LENGTH = 26;
  this.value = sentence;
};

Pangram.prototype.isPangram = function isPangram() {
  if (!this.value) return false;

  var sentence = this.value
    .replace(/[\d\W_]+/g)
    .toLowerCase()
    .split('')
    .reduce(function(sentence_set, letter) {
      sentence_set[letter] = true;
      return sentence_set;
    }, {});

  return Object.keys(sentence).length === this.ALPHABET_LENGTH;
};

module.exports = Pangram;
