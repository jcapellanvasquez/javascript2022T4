const url = "https://jsonplaceholder.typicode.com/posts"

const btn = document.querySelector("#btn-cargar-datos")

btn.addEventListener("click", ()=> {

    // 1. Crear variable para los posts
    let posts = [];

    // 2. cargar los datos en la variable posts
    let datos = getDatos()
    // 3. convertir los datos de la respuesta a JSON
    let datosJSON = getDatosJSON(datos)

    let datosDelay = delayDatos(datosJSON)

    
    // 4. asignar datos a la variable posts
 
    const lista = document.getElementById("lista")
    datosDelay.forEach(post => {
            const li = document.createElement("li")
            li.innerHTML = post.title
            lista.appendChild(li)
        })
        console.log(lista)

    // 5. Renderizamos la lista de los post 
  
})