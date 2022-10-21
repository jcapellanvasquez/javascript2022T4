let x = "Iniciada";
function exampleFunction() {
    let x = "declarada dentro de la función"; // x solo se puede utilizar en exampleFunction
    console.log("funcion interna");
    console.log(x);
}

exampleFunction()
console.log(x);  // error