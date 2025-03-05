// 2. Métodos para buscar y acceder a elementos

// Devuelve el 1º índice donde se encuentra un elemento, o -1 si no existe.

const array = [1, 2, 3, 2];
array.indexOf(2); // 1


// Devuelve el último índice donde se encuentra un elemento, o -1 si no existe.

const array2 = [1, 2, 3, 2];
array2.lastIndexOf(2); // 3


// Devuelve TRUE si existe en el array, o FALSE si no.

const array3 = [1, 2, 3];
array3.includes(2); // true


// Devuelve el 1º ELEMENTO que cumple con una condición.

const array4 = [1, 2, 3, 4];
array4.find((elemento) => elemento > 2); // 3
//          ELEMENTO       CONDICION


// Devuelve el índice del primer elemento que cumple con una condición.

const array5 = [1, 2, 3, 4];
array5.findIndex((elemento) => elemento > 2); // 2
//                 ELEMENTO       CONDICION