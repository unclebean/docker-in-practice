const express = require('express')
const app = express()
const {fibonacciR} = require('./src/fibonacci');

app.get('/', function (req, res) {
    const {
        input
    } = req.query;
    console.log(input);
    res.send(''+fibonacciR(parseInt(input)));
})

app.listen(3000)