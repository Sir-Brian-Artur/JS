// Habitualmente uando se agrupan elementos en Arrays, se hace
// para realizar operaciones sobre estos elementos.
// La misma operación sobre distintos elementos del Array, sobre
// ciertos elementos que cumplan una condición, etc.

const miArray = ['1','2','3','4','5'];          // Los valores que maneja y devuelve 
                                                // el "forEach" son 3. "CALLBACK"
miArray.forEach((element, index, array) => {    // 1. element: valor en el índice
    console.log(element, index, array)          // 2. index: posición del índice
})                                              // 3. array: devuelve todo el array
                                                // original

miArray.forEach((elem, id) => {         // Lo que introducimos dentro del "forEach()"
    console.log(Number(elem) + id, id)  // va a ser una función. Tanto puede ser
})                                      // flecha como anónima, o alvergada en una
                                        // variable.

//Ejecuta una función para cada elemento del array.
const array = [1, 2, 3];
array.forEach((x) => console.log(x)); // 1, 2, 3


// La primera parte requiere revisión antes de pasar a Obsidian