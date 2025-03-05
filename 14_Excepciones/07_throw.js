const NUM_PIEZAS = 10;         // "throw" expresion:
const PROB_ERROR = 0.25;       //            -> string, number, boolean, object, 
                               //               funct, error(tambien es una funct)
let correctas = 0;             //     
let defectuosas = 0;           //    

const comprobacionFallo = () => Math.random() < PROB_ERROR;

const ErrorCadenaParada = function(){           // "throw" puede estar dentro de
   console.log(`Error crítico`)                 // TRY o en una FUNC que llamemos
};                                              // a fuera

for (let i = 1; i <= NUM_PIEZAS; i++) {         
   const defectuosa = comprobacionFallo();      // "throw" arroja una anomalía y busca
                                                // un siguiente "CATCH", si no lo 
   try {                                        // encuentra, salta un aviso y se
      if (i === 4) throw ErrorCadenaParada();   // ompe la cadena.
      if (defectuosa) throw new ErrorPiezaDefectuosa(i);
      correctas++;               
   } catch (ex) {       // CATCH captura ese lanzamiento, cuya expresión puede ser 
      defectuosas++;    // guardada como PAR para ser utilizada dentro de su codigo
   }                    // CATCH sólo se ejecuta si "throw" salta.
}

console.log(`${NUM_PIEZAS} Piezas fabricadas`);     // TRY: Intenta ejecucion
console.log(`  -> ${correctas} favorables`);        // throw: arroja anomalía
console.log(`  -> ${defectuosas} desfavorables`);   // CATCH: Captura anomalía
                                                    // Finally: Ejecuta finalmente

function doSomethingErrorProne() {
   if (ourCodeMakesAMistake()) {
     throw new Error("The message");
   } else {
     doSomethingToGetAJavaScriptError();
   }
 }
 
 try {
   doSomethingErrorProne();
 } catch (e) {
   // Now, we actually use `console.error()`
   console.error(e.name); // 'Error'
   console.error(e.message); // 'The message', or a JavaScript error message
 }