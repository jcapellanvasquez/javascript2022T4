import { generarColorHex } from "./config.js"



export const renderShape = () => {
    const square = document.createElement('div')
    square.style.width = '400px'
    square.style.height = '400px'
    square.style.backgroundColor = generarColorHex()
    square.style.borderRadius = '50%'
    square.style.padding = '3rem'
    square.style.margin = '0 auto';
    square.textContent = 'Mi circulo'
    document.body.appendChild(square)
}