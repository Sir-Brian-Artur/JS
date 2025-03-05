const numero = 1;               // Borrar "{}" si lo hacemos en toda la seie
                                // de condicionales. De lo contrario, dejar 
if (numero === 0){              // puestas las "{}" para no andar a mezclar. 
    console.log("Cero");
} else {
    console.log("No es cero");              // Si la {sentencia} es de una única
};                                          // línea, podemos omitir las {}.
                                            // Esto hace que las sentencias se lean
if (numero === 0) console.log("Cero");      // más claras
else if (numero === 1) console.log("Uno");
else console.log("Es mayor de uno");