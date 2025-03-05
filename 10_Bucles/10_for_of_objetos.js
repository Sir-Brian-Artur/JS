// JavaScript no tiene un bucle for...of nativo para objetos, pero puedes combinarlo con Object.entries() para iterar sobre pares clave-valor.

const persona = { nombre: "Juan", edad: 25 };

for (let [clave, valor] of Object.entries(persona)) {   // <- entries
    console.log(`${clave}: ${valor}`);
}
// Resultado:
// nombre: Juan
// edad: 25