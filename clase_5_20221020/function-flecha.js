const saludar = (nombre) => console.log("Hola " + nombre + " como estas?")
saludar("Jose")

const saludarDespedir = (nombre) => {
    saludar(nombre);
    console.log("Adios")
}

saludarDespedir("Maria");



