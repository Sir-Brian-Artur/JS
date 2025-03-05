// Similar a forEach(), pero devuelve un nuevo array con los resultados de aplicar una función a cada elemento.

const nuevoArray = array.map((elemento, indice, array) => {
    return valorTransformado;
});


const numeros = [1, 2, 3, 4, 5];

const duplicados = numeros.map((numero) => {
    return numero * 2;
});

console.log(duplicados); // Resultado: [2, 4, 6, 8, 10]