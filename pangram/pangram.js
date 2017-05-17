var Pangram = function(sentence) {
  this.value = sentence;
};

Pangram.prototype.isPangram = function isPangram() {
  // ES2015
  if (!this.value) return false;

  var alphabet_length = 26;
  var sentence_set = {};

  this.value
    .replace(/[\d\W_]+/g)
    .toLowerCase()
    .split('')
    .forEach(function(value) {
      sentence_set[value] = true;
    });

  if (Object.keys(sentence_set).length === alphabet_length) return true;

  return false;

  // ES6
  // var sentence = this.value.replace(/[\d\W_]+/g).toLowerCase();
  // let sentence_set = new Set(sentence);
  // let alphabet_len = 26;
  //
  // return sentence_set.size === alphabet_len;
};

module.exports = Pangram;
