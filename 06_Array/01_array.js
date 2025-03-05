// Los Arrays/Arreglos son listas de elementos que podemos agrupar. Para poder,
// posteriormente, realizar operaciones sobre ellos y almacenar este cojunto de
// elementos (matriz de elementos) dentro de una variable.

const miArray = ['Hola', 5, true, null, undefined, {a:2, b:3}, ()=>'Adios', [1,2,3]]

console.log(miArray);   // Accedemos a toda la matriz
console.log(miArray[5]) // Accedemos al valor que se encuentra en la posición "5"

miArray[4] = 'Pablo'        // Al igual que con los objetos, podemos reasignar
console.log(miArray[4])     // su valores.

// Podemos alamacenar cualquier tipo de dato dentro de un Array. Ya que JavaSript
// es un lenguaje de tipado dinámico.

// Lo recomendable es almacenar datos del mismo tipo dentro de un Array y no andar
// a mezclar tipos. Para así poder relizar las mismas peraciones 