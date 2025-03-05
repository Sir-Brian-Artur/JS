// 3. Métodos para transformar arrays

// Crea un nuevo array aplicando una función a cada elemento.
const array = [1, 2, 3];
const nuevoArray = array.map((x) => x * 2); // [2, 4, 6]
//                        ELEMENTO   OPERACION

// Crea un NUEVO array con los elementos que cumplen una condición.
const array2 = [1, 2, 3, 4];
const nuevoArray2 = array2.filter((x) => x > 2); // [3, 4]


// Reduce el array a un único valor aplicando una función acumuladora.
const array3 = [1, 2, 3, 4];
const suma = array3.reduce((acumulador, x) => acumulador + x, 0); // 10


// Aplana un array de arrays en un solo array.
const array4 = [1, [2, [3, [4]]]];
array4.flat(2); // [1, 2, 3, [4]]


// Combina map() y flat() en un solo método.
const array5 = [1, 2, 3];
array5.flatMap((x) => [x, x * 2]); // [1, 2, 2, 4, 3, 6]