const numero = 4;                               // Lo que introduzcamos dentro de
                                                // los ( ) va a ser transformado a 
if (numero === 0) console.log("Truthy");        // BOOLEAN. De ahí que el resultado
else console.log("Falsey");                     // de una condición favorable sea
                                                // "TRUE".

const valor = 4;                        // Por eso, cualquier nº va a pasar a "TRUE"
                                        // menos el "0" que pasa a "FALSE".
if (valor) console.log("Truthy");   
else console.log("Falsey");

/* Valores Falsey:                  Valores Truthy:
        - 0                             - NUMB
        - ""                            - STRING
        - false                         - true
        - null                          - {}             ← Pese a que estén vacíos,
        - undefined                     - []             ← siguen siendo "TRUE"
                                        - function(){}   ← Los valores Objeto no 
                                                           tienen ese valor false
    [].lenght → 0 → false               */           
      