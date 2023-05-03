const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const chefsInfo = require('./data/chefs_info.json');

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/chefsInfo', (req, res) => {
    res.send(chefsInfo);
})

app.listen(port, () => {
    console.log(`Recipe API is running on port: ${port}`);
})