const prompt = require('prompt');

prompt.start()


console.log("dime cuantos pasos")

prompt.get(["valor"], function (error, resultado) {

    const valor = +resultado.valor;
    for (let step = 0; step < valor; step = step + 1) {
        // Se ejecuta 5 veces, con valores del paso 0 al 4.
        console.log('Camina un paso hacia el este' + step);
    }
});