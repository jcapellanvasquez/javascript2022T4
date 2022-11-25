
/** @constant
    @type {string}
    @default https://jsonplaceholder.typicode.com/users
*/
export const URL = "https://jsonplaceholder.typicode.com/users";

export let user = {
    // id: Math.random().toString(30).substring(2),
    id: "t4qf5378p1s",
    name: "Pedro",
    email: "elpedro@gmail.com"
}


export const changeBg = () => {
    document.body.style.backgroundColor = '#F5F5F4'
}

export const drawSquare = () => {
    const square = document.createElement('div')
    square.style.width = '400px'
    square.style.height = '400px'
    square.style.backgroundColor = generarColorHex()
    square.style.borderRadius = '8px'
    square.style.padding = '3rem'
    square.style.margin = '0 auto';
    square.textContent = 'Mi cuadrado'
    document.body.appendChild(square)
}

export const renderShape = () => {
    const square = document.createElement('div')
    square.style.width = '400px'
    square.style.height = '400px'
    square.style.backgroundColor = generarColorHex()
    square.style.borderRadius = '8px'
    square.style.padding = '3rem'
    square.style.margin = '0 auto';
    square.textContent = 'Mi cuadrado'
    document.body.appendChild(square)
}

/**
 * @returns {string} codigo hexadecimal de color
 */
export const generarColorHex = ()=> {
    let colorRules = '0123456789ABCDEF'; 
    let finalCode = '#'
    for (var counter = 0; counter < 6; counter++) {
        finalCode =finalCode + colorRules[Math.floor(Math.random() * 16)];
     }
     return finalCode;
}
