let express = require('express');
var app = express();
var http = require('http').createServer(app);

app.get('/', (req, res) => {
    res.send('<h1>Ciao</h1>');
});

http.listen(3000, () => {
    console.log('listening on *:3000');
});