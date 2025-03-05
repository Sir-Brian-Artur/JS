// Similar al while, pero garantiza que el código se ejecute al menos una vez, ya que la condición se evalúa al final.
 
do {
    // Código a ejecutar
} while (condición);


let i = 0;
do {
    console.log(i); // Imprime 0, 1, 2, 3, 4
    i++;
} while (i < 5);
