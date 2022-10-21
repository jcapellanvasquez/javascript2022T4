const saludar = (nombre) => console.log("Hola " + nombre + " como estas?")
// saludar("Jose")

const saludarDespedir = (nombre, responder) => {
    saludar(nombre);
    responder()
    console.log("Adios")
}
const responser = () => console.log("Todo bien")
saludarDespedir("Maria", responser);

