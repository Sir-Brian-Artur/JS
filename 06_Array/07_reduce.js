// "Array.reduce()" lo que hace es transformar todo un Array, siguiendo unas reglas
// sumarlo, realizar distintas operaciones y transformarlo en un único valor.

const totalFactura = [27.83, 45.98, 67.75999999999999, 26.619999999999997];
const total = totalFactura.reduce((a,b) => a + b);
console.log(total)          

// "reduce" es un acumulador que va agregando, de 1 en 1, todos los elementos 
// del Array. 

let total2 = 0;                          // 1. Iniciamos un contador en "0"
totalFactura.forEach(i => total2 += i)   // 2. Por cada elemento, suma su valor
console.log(total2)                      // 3. Imprimimos ese valor ya modificado