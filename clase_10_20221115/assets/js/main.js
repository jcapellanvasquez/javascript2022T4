const button = document.querySelector("button")
const buttons = document.querySelectorAll("button")


button.addEventListener("click", () => {
    const nombre = Math.random()
                    .toString(30)
                    .substring(2)
                    .toLocaleUpperCase()

    generarElementoList(nombre)
})

const generarElementoList = (nombre) => {
    // Buscar listado
    const listado = document.querySelector("ul")

    // Crear elemento
    const item = document.createElement("li")
    item.innerHTML = nombre

    item.classList.add("item")

    console.log(item.parentElement)
    listado.appendChild(item)
}