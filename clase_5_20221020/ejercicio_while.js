// while (condición)
//  expresión

const prompt = require("prompt");
prompt.start()

function correr(error, resultado) {
    let longitud = +resultado.longitud
    let i = 0;
    let arr = new Array(longitud);
    
    while(i < longitud) {
        arr[i] = Math.random()
        i = i+1;
    }
    console.log(console.log(arr))
}


prompt.get(["longitud"], correr)