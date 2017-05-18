var Bob = function() {};

Bob.prototype.hey = function hey(expression) {
  // Returns a different response based on the type of expression.
  var expressionStripped = expression.trim();
  var expressionSubbed = expression.replace(/[\d\W_]+/g, '');

  var isQuestion = expression[expressionStripped.length - 1] === '?';
  var isExclamation = expressionStripped.toUpperCase() === expressionStripped;

  if (!expressionStripped) {
    return "Fine. Be that way!";
  } else if (isExclamation && expressionSubbed) {
    return "Whoa, chill out!";
  } else if (isQuestion) {
    return "Sure.";
  }

  return "Whatever."
};

module.exports = Bob;
