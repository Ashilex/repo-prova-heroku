let PORT = process.env.PORT || 5000;

let express = require('express');
var app = express();
var http = require('http').createServer(app);

app.get('/', (req, res) => {
    res.send('<h1>Ciao</h1>');
});

http.listen(PORT, () => {
    console.log('listening on *:3000');
});