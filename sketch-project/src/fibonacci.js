function fibonacciFormula(number) {
  const sqRootOf5 = Math.sqrt(5);

  const Phi = (1 + sqRootOf5) / 2;
  const phi = (1 - sqRootOf5) / 2;

  return Math.round((Phi ** number - phi ** number) / sqRootOf5);
}

function fibonacciRecursion(number) {
  if (number < 1) return 0;

  if (number <= 2) return 1;

  return fibonacciRecursion(number - 1) + fibonacciRecursion(number - 2);
}

function fibonacciLoop(number) {
  const sequence = [1, 1];

  for (let i = 2; i < number; i += 1) {
    sequence[i] = sequence[i - 1] + sequence[i - 2];
  }
  return sequence[number - 1];
}

function fibonacciIteration(number) {
  let previousFirst = 0;

  let previousSecond = 1;

  let next = 1;
  for (let i = 2; i <= number; i += 1) {
    next = previousFirst + previousSecond;
    previousFirst = previousSecond;
    previousSecond = next;
  }
  return next;
}

module.exports.fibonacciFormula = fibonacciFormula;
module.exports.fibonacciRecursion = fibonacciRecursion;
module.exports.fibonacciLoop = fibonacciLoop;
module.exports.fibonacciIteration = fibonacciIteration;
