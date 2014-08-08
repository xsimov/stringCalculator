function calculate(operation) {
  var separatedOperation = operation.split('');
  var firstOperand = parseInt(separatedOperation[0]);
  var secondOperand = parseInt(separatedOperation[operation.length - 1]);

  if (isNaN(firstOperand) || isNaN(secondOperand)) {
    return NaN;
  };

  return firstOperand + secondOperand;

}