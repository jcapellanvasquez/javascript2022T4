const miArray = ["Piso 1", "Piso 2", "Piso 3", "Piso 4", "Piso 5"] // los Array son variables indexadas.

for (let i = 0; i < 6; i = i + 1) {
    console.log(miArray[i])
    if (i === 2) {
        console.log("El piso que buscas es: " + miArray[i])
    }
}
