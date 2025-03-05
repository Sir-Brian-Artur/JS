// 6. Métodos para verificar elementos

//Verifica si todos los elementos cumplen una condición.
const array1 = [1, 2, 3, 4];
array1.every((x) => x > 0); // true


//Verifica si al menos un elemento cumple una condición.
const array2 = [1, 2, 3, 4];
array2.some((x) => x > 3); // true