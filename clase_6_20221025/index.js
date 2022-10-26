const express = require('express')
const app = express()

app.get('/hello-word', function (req, res) {
    res.send('Hello World')
})

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/vistas/index.html");
})

app.listen(80)
console.log("Servidor web corriendo: http://localhost")

