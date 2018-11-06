const express = require('express')
const fibonaccisAPI = require('./src/fibonaccis-api');
const app = express()
fibonaccisAPI(app);

app.listen(3000);