const express = require('express');
const {join} = require("path");
const app = express();
const supabase = require('./helpers/supabase')
const {response} = require("express");

app.listen(process.env.PORT || 3000);

app.use(express.static('public'))
let userCounts = {};


app.get('/', (req, res) => {
    res.sendFile('index.html', {root: join(__dirname, 'public')});
})


app.get('/api/visits/:username', (req, res) => {
    const username = req.params.username;
    if (!userCounts[username]) {
        userCounts[username] = 0;
    }
    userCounts[username]++;
    const message = { visits: userCounts[username] };
    res.json(message);
});




app.get('/api/hello', (req, res) => {
    const message = { message: 'Hello, world!' };
    res.json(message);
});


module.exports = app
