// Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a.

const prompt = require('prompt');

prompt.start()

console.log("Escribir un texto")

prompt.get(["valor"], function (error, resultado) {
    let conteoLetraA = 0;
    const valor = resultado.valor;
    
    for (let step = 0; step < valor.length; step = step + 1) {
        if (valor[step] === "a") {
            conteoLetraA = conteoLetraA + 1;
        }
    }

    console.log("La letra 'a' aparece " + conteoLetraA + " de veces")
});