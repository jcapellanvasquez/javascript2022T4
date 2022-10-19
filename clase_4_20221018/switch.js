const prompt = require("prompt");

prompt.start();

console.log("ingrese un valor");
prompt.get(["profesion"], function (error, resultado) {
    let profesion = resultado.profesion
    switch (profesion) {
        case "Maestro":
            console.log("La prefesión seleccionada es de Maestro 🍎");
            break
        case "Ingeniero":
            console.log("La prefesión seleccionada es de Ingeniero 👷");
            break
        case "Doctor":
            console.log("La prefesión seleccionada es de Doctor 👨‍⚕️");
            break
        default:
            console.log("La prefesión no es valida 🤔")
            break;
    }
    console.log("Fin!")
});