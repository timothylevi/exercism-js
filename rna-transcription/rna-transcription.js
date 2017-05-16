var DnaTranscriber = function() {
  this.rnaComplements = {
    'G': 'C',
    'C': 'G',
    'T': 'A',
    'A': 'U'
  };
};

DnaTranscriber.prototype.getRnaComplement = function getRnaComplement(nucleotide) {
  // Return the RNA complement of the passed DNA nucleotide or throw an error.
  var complement = this.rnaComplements[nucleotide];

  if (complement === undefined) {
    throw new Error('Invalid input');
  }

  return complement;
};

DnaTranscriber.prototype.toRna = function toRna(sequence) {
  // Map string elements and return string of RNA components of nucleotides.
  return sequence
    .split('')
    .map(this.getRnaComplement.bind(this))
    .join('');
};

module.exports = DnaTranscriber;
