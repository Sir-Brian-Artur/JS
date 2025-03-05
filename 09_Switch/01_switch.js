/* "Switch" es una estructura de control que nos sustituye a los "IF" & "ELSE IF"
en los que hay demasiadas estructuras de ellos; los que se hacen demasiado largos.
La estructura alternativa que nos permite alvergar en "Casos" nuestras condiciones
*/
const numero = 2    // switch ( PAR ) {    ← Parámetro
                    //    case X :         ← Condición
                    //        SENTENCIA    ← Código para ejecutar
                    //    break;           ← Fin de "ciclo"
                    
switch (numero) {
    case 0:         // ← if (numero === 0)              // "break" sirve para cortar
        console.log("Cero");                            // la estructura de control,
        break;                                          // una vez hay ejecutado la
    case 1:         // ← if else (numero === 1)         // sentencia.
        console.log("Uno"); 
        break;
    case 2:         // ← if else (numero === 2)     // "case" va a ejecutar odo lo 
        console.log("Dos");                         // que tenga debajo hasta que  
        break;                                      // encuentre un "brake". Por eso
    case 3:         // ← if else (numero === 3)     // nos vemos obligados a ponerlo
        console.log("Tres");                        // en cada caso.
        break;
    default:        // ← else
        console.log("Otro")      
}

const num = 4

switch (num) {
    case 0:       // ←   Varios "casos" 
    case 1:       // ←   para la misma
    case 2:       // ←   sentencia
        console.log("Cero");                     
        break;  
    case 3:                         // Estas estructuras no valen para condiciones
    case 4:                         // de "true" o "false". Ya que cada caso es
    case 5:                         // específico.
        console.log("Tres");                   
        break;                  // No es muy recomendable su uso, ya que tiene un  
    default:                    // bajo rendimiento si lo comparamos con otras
        console.log("Otro")     // estructuras de control.
}