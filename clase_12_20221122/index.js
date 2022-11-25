const express = require('express')
const path = require("path")
const app = express()
const port = 8100;

app.use("/assets", express.static(path.resolve(__dirname, "assets")));
app.use("/node_modules", express.static(path.resolve(__dirname, "node_modules")));

app.get('/', function (req, res) {
    res.sendFile(path.resolve(__dirname, "vistas", "index.html"));
});

app.get('/promesas', function (req, res) {
    res.sendFile(path.resolve(__dirname, "vistas", "promesas.html"));
});

app.get('/fetch', function (req, res) {
    res.sendFile(path.resolve(__dirname, "vistas", "fetch.html"));
});




app.listen(port)
console.log(`Servidor web corriendo: http://localhost:${port}`)