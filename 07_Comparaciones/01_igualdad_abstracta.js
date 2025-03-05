/* Las comparaciones es comparar 2 valores, a través de un operador de comparación,
y obtener un valor BOOLEAN como respuesta. Compara 2 valores implica obtener un 
valor "TRUE" o "FALSE" como respuesta. */

const a = 1;                // == != : Comparador Loose (Abstracto)
const b = '1';              // JavaScript intenta pasar los valores al mismo tipo
const c = true;             // de ahí que "a","b" y "c" sean iguales.
const d = 'a';              

                            // Las comparaciones de tipos distintos, normalmente
console.log(a == b);        // pasan a valores de tipo NUMBER.
console.log(a == c);
console.log(a == d);
                                    // Son lo mismo, ya que tanto un "Array Vacío",
console.log([] == false);           // como un "FALSE" on igual a "0".       

console.log(b != d);        // Comparador "DISTINTO"