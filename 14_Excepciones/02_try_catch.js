const NUM_PIEZAS = 10;
const PROB_ERROR = 0.25;

const comprobacionFallo = () => Math.random() < PROB_ERROR;

for(let i = 1; i <= NUM_PIEZAS; i++){
    const defectuosa = comprobacionFallo();

    try {
        if(defectuosa) throw `¡¡Pieza ${i} presenta falla!!`; // detecta el error

        console.log(`Pieza ${i} fabricada`);    // codigo normal
    } catch(ex){            // <-- Impide que se rompa el código
        console.log(ex)
    }
    
/*  try {
    Sentencias_Ejecutar y throw_codigo
    } catch (Código_excepción) {
      Codigo_que_se_lanza_si_hay_excep_en_try
    } finally {
      Codigo_se_ejecuta_simpre_al_final
    }
*/ 
}