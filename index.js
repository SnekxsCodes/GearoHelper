const express = require('express');
const {join} = require("path");
const app = express();

app.listen(process.env.PORT || 3000);

app.use(express.static('public'))
let visitCount = 0;


app.get('/', (req, res) => {
    res.sendFile('index.html', {root: join(__dirname, 'public')});
})

app.get('/api/visits', (req, res) => {
    visitCount++;
    const message = { visits: visitCount };
    res.json(message);
});


app.get('/api/hello', (req, res) => {
    const message = { message: 'Hello, world!' };
    res.json(message);
});


module.exports = app
