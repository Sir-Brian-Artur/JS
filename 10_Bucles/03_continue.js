let contador = -5;                      // Ya que la division va a general un 
                                        // Infinito vamos a omitir esa vueta con 
                                        // el operador "CONTINUE"
do {
    if (contador === 0) {       // ← Condición que queremos omitir
        contador++;             // ← Contador: para envitar Bucle Infinito
        continue                // ← Continue: para saltar el ciclo.
    } 
    console.log("while", 10/contador);
    contador++;                             
} while (contador <= 5);                    

// Continue: se salta ese ciclo/vuelta del bucle, y pasa a la siguiente.
// Break: rompe lo que queda del buble, aunque hubiese más vueltas por dar.