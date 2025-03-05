// Se utiliza para iterar sobre objetos iterables asíncronos, como promesas o streams.

for await (elemento of iterableAsincrono) {
    // Código a ejecutar
}


async function ejemplo() {
    const promesas = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)];

    for await (let resultado of promesas) {
        console.log(resultado); // Imprime 1, 2, 3
    }
}

ejemplo();