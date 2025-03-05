// 7. Métodos para iterar sobre arrays

//Ejecuta una función para cada elemento del array.
const array = [1, 2, 3];
array.forEach((x) => console.log(x)); // 1, 2, 3


//Devuelve un iterador con los índices del array.
const array2 = ["a", "b", "c"];
for (let indice of array2.keys()) {
    console.log(indice); // 0, 1, 2
}


//Devuelve un iterador con los valores del array.
const array3 = ["a", "b", "c"];
for (let valor of array3.values()) {
    console.log(valor); // "a", "b", "c"
}


//Devuelve un iterador con pares [índice, valor].
const array4 = ["a", "b", "c"];
for (let [indice, valor] of array4.entries()) {
    console.log(indice, valor); // 0 "a", 1 "b", 2 "c"
}