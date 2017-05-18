var Gigasecond = function(pastDate) {
  this.GIGASECOND = 1000000000;
  this.pastDate = pastDate;
};

Gigasecond.prototype.date = function date() {
  var time_in_ms = this.pastDate.getTime();
  var gigasecond_in_ms = this.GIGASECOND * 1000;

  return new Date(time_in_ms + gigasecond_in_ms);
};

module.exports = Gigasecond;
