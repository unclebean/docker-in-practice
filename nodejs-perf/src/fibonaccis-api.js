const {
    fibonacciFormula,
    fibonacciRecursion,
    fibonacciLoop,
    fibonacciIteration
} = require('./fibonacci');

module.exports = (app) => {
    app.get('/formula', function (req, res) {
        const {
            input
        } = req.query;
        console.log(input);
        res.send('' + fibonacciFormula(parseInt(input)));
    });

    app.get('/recursion', function (req, res) {
        const {
            input
        } = req.query;
        console.log(input);
        res.send('' + fibonacciRecursion(parseInt(input)));
    });

    app.get('/loop', function (req, res) {
        const {
            input
        } = req.query;
        console.log(input);
        res.send('' + fibonacciLoop(parseInt(input)));
    });

    app.get('/iteration', function (req, res) {
        const {
            input
        } = req.query;
        console.log(input);
        res.send('' + fibonacciIteration(parseInt(input)));
    });
};