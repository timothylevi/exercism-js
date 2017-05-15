var Year = function(input) {
  this.value = input;
};

Year.prototype.isLeap = function() {
  var year = this.value;

  function isDivisbleBy(rule) {
    return year % rule === 0;
  };

  if (isDivisbleBy(400)) {
    return true;
  } else if (isDivisbleBy(100)) {
    return false;
  } else if (isDivisbleBy(4)) {
    return true;
  }

  return false;
};

module.exports = Year;
