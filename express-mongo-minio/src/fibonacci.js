function fibonacci(number) {
    var sqRootOf5 = Math.sqrt(5);

    var Phi = (1+sqRootOf5)/2;
    var phi = (1-sqRootOf5)/2

    return Math.round((Math.pow(Phi, number) - Math.pow(phi, number)) / sqRootOf5);
}

function fibonacciR(number) {

	if (number < 1)
		return 0;

	if (number <= 2)
		return 1;

   return fibonacciR(number - 1) + fibonacciR(number - 2);
}

module.exports.fibonacci = fibonacci;
module.exports.fibonacciR = fibonacciR;