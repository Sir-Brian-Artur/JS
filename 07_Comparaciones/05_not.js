const a = 1;                // !x : Operador "NOT". 
const b = 2;                
const c = 3;                // Es negar 1 de los operarios. A un BOOLEAN cualquiera
                            // le ponemos delante un "!" y ya estamos diciendo que
console.log(!(a > b));      // sea lo contrario
console.log(!false);        //     !TRUE = FAlSE       !FALSE = TRUE

console.log(!(a > b) && b < c);     //    !FALSE "AND" TRUE = TRUE