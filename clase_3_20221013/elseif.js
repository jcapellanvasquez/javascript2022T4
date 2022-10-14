const prompt = require('prompt')

prompt.start();

prompt.get(["edad"], function (error, valores) {
    let edad = +valores.edad;

    if (edad === 10) {
        console.log("Es un nino")
    }
    else if (edad === 15) {
        console.log("Es un adolecente")
    }
    else if (edad === 18) {
        console.log("Es un adulto joven")
    }
    else {
        console.log("ninguna concidencia")
    }
})