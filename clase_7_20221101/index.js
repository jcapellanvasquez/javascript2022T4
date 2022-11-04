const express = require('express')
const app = express()

// este ejemplo es para cuando la carpeta esta dentro de otra
//app.use(express.static('public/assets'));
app.use(express.static('assets'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/vistas/index.html");
});

app.get('/formulario', function (req, res) {
    res.sendFile(__dirname + "/vistas/formulario.html");
});

app.listen(8300)
console.log("Servidor web corriendo: http://localhost:8300")