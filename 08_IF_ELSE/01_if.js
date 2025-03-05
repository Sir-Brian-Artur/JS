const numero = 1;               // "IF"  "( )"      "{ }"
                                //         ↑          ↑
if (numero === 0){              //     Condición    Sentencia/s
    console.log("Cero");
};                              // () : Condición que queremos evaluar
                                // {} : Sentencia/s que ejecutaremos en el caso
                                //      de que se cumpla esa condición. 

if (numero === 0) {                 // IF : Si se cumple. Condición es "TRUE"                 
    console.log("Cero");
} else {                            // ELSE : Si no se cumple. Condición el "FALSE"
    console.log("No es cero");
};

if (numero === 0) {         //  ← Condición_1                   
    console.log("Cero");
} else if (numero === 1){   //  ← Condición_2                         
    console.log("Uno");     
} else {                    //  ← De lo contrario, sentencia por defecto
    console.log("No es cero ni uno")
}; 

// Podemos tener tantos "ELSE IF" como queramos. Estas condiciones se van a ir 
// evaluando de 1 en 1.