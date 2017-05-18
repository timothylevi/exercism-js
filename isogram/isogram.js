function convertStringToSet(string) {
  return string
    .split('')
    .reduce(function(set, char) {
      set[char] = true;
      return set;
    }, {});
}

var Isogram = function(word) {
  this.word = word.replace(/[\s-]+/g, '').toLowerCase();
};

Isogram.prototype.isIsogram = function isIsogram() {
  var chars = Object.keys(convertStringToSet(this.word));
  return chars.length === this.word.length;
}

module.exports = Isogram;
