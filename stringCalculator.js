function calculate(operation) {

  var separatedEntry = operation.split('');
  var numbers = ['',''];
  var counter = 0;

  separatedEntry.forEach(function(i){
    if (isNaN(i)){
      counter++;
      operationSymbol = i;
    }else{
      numbers[counter] += i;
    }
  });

  numbers[0] = parseInt(numbers[0]);
  numbers[1] = parseInt(numbers[1]);

  if (isNaN(numbers[0]) || isNaN(numbers[1])) {
    return NaN;
  };

  function sum(a,b,c){
    return a + c[b - 1];
  }

  function extract(a,b,c){
    return a - c[b - 1];
  }

  function divide(a,b,c){
    return a / c[b - 1];
  }

  function multiply(a,b,c){
    return a * c[b - 1];
  }

  allOperations = {
    "+": sum,
    "-": extract,
    "/": divide,
    "*": multiply
  };

  var operationToDo = allOperations[operationSymbol];

  result = numbers.map(operationToDo);
  return result[result.length - 1];
}