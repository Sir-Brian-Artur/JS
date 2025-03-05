const miArray = [1,2,3,4,5,6];

console.log(typeof miArray);    //typeof = tipo de valor

console.log(miArray.length);    // Propiedad para consultar la longitud

miArray.push(7);            // "push" añade un elemento al final del Array

const ultimoElemento = miArray.pop()        // "pop" extrae el último elemento y nos
console.log(miArray)                        // lo devuelve. De esta manera podemos 
console.log(ultimoElemento)                 // guardarlo en una variable.

const primerElemento = miArray.shift()          // "shift" extrae el último elemento y 
console.log(miArray)                            // y nos lo devuelve. Asi, igualmente
console.log(primerElemento)                     // podemos guardarlo en una variable

miArray.unshift(0);         // "unshift" añade un elemento al principio del Array