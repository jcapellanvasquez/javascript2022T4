const prompt = require('prompt')

prompt.start();

prompt.get(["edad"], function (error, valores) {
    let edad = +valores.edad;

    if (edad >= 18 && edad <= 29) {
        console.log("Es mayor de edad");
    }
    else if (edad >= 30 && edad <= 39) {
        console.log("Es adulto joven");
    }
    else if (edad >= 40 && edad <= 49) {
        console.log("Es Adulto");
    }
    else {
        console.log("Rango de edad no establecido");
    }
})