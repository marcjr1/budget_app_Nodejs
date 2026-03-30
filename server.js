const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Bonjour, le monde!');
    })

app.post('/Heloo', (req, res) => {
    res.send('Hello, World!');
    });


app.listen(3000);