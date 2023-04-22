const express = require('express');
const {join} = require("path");
const app = express();

app.listen(process.env.PORT || 3000);

app.use(express.static('public'))


app.get('/', (req, res) => {
    res.sendFile('index.html', {root: join(__dirname, 'public')});
})

module.exports = app
