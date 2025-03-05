const miArray = [1,2,3,4,5];        // Realizar una operación sobre todos los 
                                    // elementos del Array y devolver un NUEVO
                                    // Array que contenga el resultado

//miArray.map()       // "map()" recibe un CALLBACK igual a "forEach"
                    // (valor, index, array) y va a devolver un array resultante

let miArray2 = [1,2,3,4];

miArray2 = miArray2.map(function(i) {return i * 3});    // Misma operación hecha
                                                        // con FUN.ANONIMA y hecha
miArray2 = miArray2.map(i => i / 3);                    // con ()=>{}

console.log(miArray2);      // La diferencia entre "map()" y "forEach()" es que:                           
                            // "map()" nos devuelve la transformación de los elementos 
                            // que teníamos en el Array, y los mete en un nuevo Array. 

                            // El array con "map()" siempre va a tener el mismo 
                            // nº de elementos que lo que tenía el Array original.

const miArray3 = miArray.forEach((elem, index)=>{   // "forEach()" realiza una 
    console.log(elem * 2, index)                    // acción pero no devuelve nada.
})                                                  // tan solo un "undefined"

console.log(typeof miArray3)