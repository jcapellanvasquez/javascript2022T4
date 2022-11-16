const express = require('express')
const path = require("path")
const app = express()
const port = 8100;

app.use("/assets", express.static(path.resolve(__dirname, "assets")));

app.get('/', function (req, res) {
    res.sendFile(path.resolve(__dirname, "vistas", "index.html"));
});


app.listen(port)
console.log(`Servidor web corriendo: http://localhost:${port}`)