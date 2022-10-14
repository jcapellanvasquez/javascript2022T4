// Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.

const prompt = require('prompt');

// Iniciar el prompt
prompt.start();

console.log("Igrese 2 numeros");
// Obtener valores de la consola
prompt.get(["numero1", "numero2"], function(error, resultado) {
    // Inicio de operaciones

    let numero1 = +resultado.numero1 // Obtener valores pedidos al usuario
    let numero2 = +resultado.numero2 // Obtener valores pedidos al usuario

    if (numero1 > numero2) {
        console.log("variable 'numero1' es mayor que variable 'numero2'")
    } 
    if (numero1 < numero2) {
        console.log("variable 'numero2' es mayor que variable 'numero1'")
    }
    if (numero1 === numero2) {
        console.log("variable 'numero1' es igual que variable 'numero2'")
    } else {
        console.log("Ocurrio un error")
    }
    
    // Fin de operaciones
});
