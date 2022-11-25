const isLoading = (btn) =>
    (btn.innerHTML = `<ion-icon name="cloud-download-outline"></ion-icon> Cargando datos... `);
const isLoaded = (btn) => (btn.innerHTML = `Cargar POSTS`);
const url = "https://jsonplaceholder.typicode.com/posts";
const urlDitto = "https://pokeapi.co/api/v2/pokemon/ditto";
const btn = document.querySelector("#btn-cargar-datos");
const getData = () => {
    isLoading(btn);

    // 1. Crear variable para los posts
    let posts = [];
    // 2. cargar los datos en la variable posts
    fetch(url)
        // 3. convertir los datos de la respuesta a JSON
        .then((respuesta) => respuesta.json())

        .then((datos) => {
            console.log("delay time");
            return new Promise((resolve) => {
                setTimeout(() => resolve(datos), 10000);
            });
        })
        // 4. asignar datos a la variable posts
        .then((datos) => {
            console.log(datos);
            posts = datos;

            const lista = document.getElementById("lista");
            datos.forEach((post) => {
                const li = document.createElement("li");
                li.innerHTML = post.title;
                lista.appendChild(li);
            });
            isLoaded(btn);
        });

    // 5. Renderizamos la lista de los post
};
const getDitto = () => {
    isLoading(btn);

    // 1. Crear variable para los posts
    let posts = [];
    // 2. cargar los datos en la variable posts
    fetch(urlDitto)
        // 3. convertir los datos de la respuesta a JSON
        .then((respuesta) => respuesta.json())

        .then((datos) => {
            console.log("delay time");
            return new Promise((resolve) => {
                setTimeout(() => resolve(datos), 1000);
            });
        })
        // 4. asignar datos a la variable posts
        .then((datos) => {
            const sprites = datos.sprites;
            const lista = document.getElementById("lista");

            for (const prop in sprites) {
                console.log(typeof(sprites[prop]))
                if (sprites[prop] !== null && typeof(sprites[prop] !== "object")) {
                    const li = document.createElement("li");
                    const img = document.createElement("img");
                    img.src = sprites[prop];
                    li.appendChild(img);
                    lista.appendChild(li);
                }
            }
        });

    // 5. Renderizamos la lista de los post
};

const getCharizard = async () => {
    const data = await fetch("https://pokeapi.co/api/v2/pokemon/charizard")
    .then(response => response.json())
    const lista = document.getElementById("lista")
    const li = document.createElement("li");
    const img = document.createElement("img");
    img.src = data.sprites.front_default;
    li.appendChild(img);
    lista.appendChild(li);

}
btn.addEventListener("click", getCharizard);
