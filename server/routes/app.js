require('../config/config');
const express = require('express');
const app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
    res.json({
        connected: true,
        application: process.env.APPNAME,
        year: new Date().getFullYear()
    });
});

app.get('/bingo', function (req, res) {
    let min = 1;
    let max = 15;
    let colums = Array(5);
    let numbers = [];

    for (let i = 0; i < colums.length; i++) {
        colums[i] = Array(5);
        for (let j = 0; j < 5; j++) {

            let number = Math.random() * (max - min) + min;
            number = Number(number.toFixed(0));

            while (numbers.includes(number)) {
                number = Math.random() * (max - min) + min;
                number = Number(number.toFixed(0));
            }

            numbers.push(number);

            if (i === 2 && j === 2) {
                colums[i][j] = 'FREE';
            } else {
                colums[i][j] = number;
            }

        }

        min = min + 15;
        max = max + 15;

    }

    res.json({
        card: colums
    });

});

module.exports = app;