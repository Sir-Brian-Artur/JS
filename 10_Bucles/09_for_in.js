// Aunque for...in puede usarse con arrays, no es recomendable porque itera sobre todas las propiedades enumerables, incluyendo las heredadas.

const numeros = [1, 2, 3];

for (let indice in numeros) {
    console.log(numeros[indice]); // Imprime 1, 2, 3
}

