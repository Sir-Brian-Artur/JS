// 5. Métodos para unir y dividir arrays

//Combina dos o más arrays.
const array1 = [1, 2];
const array2 = [3, 4];
const nuevoArray = array1.concat(array2); // [1, 2, 3, 4]


//Devuelve una copia de una parte del array.
const array3 = [1, 2, 3, 4];
array3.slice(1, 3); // [2, 3]


//Convierte el array en un string, uniendo los elementos con un separador.
const array4 = [1, 2, 3];
array4.join("-"); // "1-2-3"