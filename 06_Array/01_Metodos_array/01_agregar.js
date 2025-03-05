// 1. Métodos para agregar y eliminar elementos

// Agrega uno o más elementos al final del array y devuelve la nueva longitud.
const array = [1, 2, 3];
array.push(4); // [1, 2, 3, 4]

// Agrega uno o más elementos al inicio del array y devuelve la nueva longitud.
const array2 = [1, 2, 3];
array2.unshift(0); // [0, 1, 2, 3]

// Elimina el último elemento del array y lo devuelve.
const array3 = [1, 2, 3];
array3.pop(); // [1, 2]

// Elimina el primer elemento del array y lo devuelve.
const array4 = [1, 2, 3];
array4.shift(); // [2, 3]

// Agrega o elimina elementos en cualquier posición del array.
const array5 = [1, 2, 3, 4];
array5.splice(1, 2, "a", "b"); // [1, "a", "b", 4]