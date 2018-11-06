function fibonacciFormula(number) {
    var sqRootOf5 = Math.sqrt(5);

    var Phi = (1+sqRootOf5)/2;
    var phi = (1-sqRootOf5)/2

    return Math.round((Math.pow(Phi, number) - Math.pow(phi, number)) / sqRootOf5);
}

function fibonacciRecursion(number) {

	if (number < 1)
		return 0;

	if (number <= 2)
		return 1;

   return fibonacciRecursion(number - 1) + fibonacciRecursion(number - 2);
}

function fibonacciLoop(number) {

	var sequence = [1, 1];

	for (var i = 2; i < number; i++) {
		sequence[i] = sequence[i-1]+ sequence[i-2];
	}

	return sequence[number-1];
}

function fibonacciIteration(number) {

    var previous_first = 0, previous_second = 1, next = 1;

    for(var i = 2; i <= number; i++) {
        next = previous_first + previous_second;
        previous_first = previous_second;
        previous_second = next;
    }
    return next;
}

module.exports.fibonacciFormula = fibonacciFormula;
module.exports.fibonacciRecursion = fibonacciRecursion;
module.exports.fibonacciLoop = fibonacciLoop;
module.exports.fibonacciIteration = fibonacciIteration;