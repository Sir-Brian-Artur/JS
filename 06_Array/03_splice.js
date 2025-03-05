// El método splice() en JavaScript se utiliza para modificar el contenido de un array eliminando, reemplazando o añadiendo elementos en posiciones específicas.

array.splice(start, deleteCount, item1, item2,       itemN)

/* 
Parámetros

- start: Índice desde el cual comenzar a modificar el array. Si es negativo, cuenta desde el final del array.

- deleteCount (opcional): Número de elementos a eliminar desde el índice start. Si es 0, no se elimina ningún elemento. Si no se especifica, se eliminan todos los elementos desde start hasta el final del array.

- item1, item2, ..., itemN (opcional): Elementos que se añadirán al array desde el índice start.
*/ 

// 1. Eliminar elementos:
let array = [1, 2, 3, 4, 5];
let eliminados = array.splice(2, 2); // Elimina 2 elementos desde el índice 2
console.log(array); // [1, 2, 5]
console.log(eliminados); // [3, 4]














const miArray = [1,2,3,4,5,6];              // Añadir elementos donde queramos

miArray.splice(3, 0, 'Chanchito', 'Feliz' );    // 1. Posición donde queremos
                                                // introducir el contenido
console.log(miArray);           // 2. nº de elementos que queremos eliminar del Array
                                // 3o+. Elementos que queremos añadir. 

miArray.splice(1, 0, ['Felipe', 'Triste', 12] );    
console.log(miArray);       // No debemos confundirnos el meter más de un elemento 
                            // con introducir un array. Ya que esto sólo añadiría
                            // un objeto que contiene más elementos