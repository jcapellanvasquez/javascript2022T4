const express = require('express')
const app = express()
const port = 8100;
// este ejemplo es para cuando la carpeta esta dentro de otra
//app.use(express.static('public/assets'));
app.use(express.static('assets'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/vistas/index.html");
});


app.listen(port)
console.log(`Servidor web corriendo: http://localhost:${port}`)