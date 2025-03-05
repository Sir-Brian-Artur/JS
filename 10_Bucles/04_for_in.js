// Se utiliza para iterar sobre las propiedades enumerables de un objeto.

for (clave in objeto) {
    // Código a ejecutar
}


const persona = { nombre: "Juan", edad: 25, ciudad: "Madrid" };

for (let clave in persona) {
    console.log(`${clave}: ${persona[clave]}`);
}
// Resultado:
// nombre: Juan
// edad: 25
// ciudad: Madrid