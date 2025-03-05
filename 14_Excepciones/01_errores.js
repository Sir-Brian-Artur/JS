const NUM_PIEZAS = 10;
const PROB_ERROR = 0.25;

const comprobacionFallo = () => Math.random() < PROB_ERROR; // FUN que lanza un Boolean

for(let i = 1; i <= NUM_PIEZAS; i++){
    const defectuosa = comprobacionFallo();     // Traemos función de fuera

    if(defectuosa) throw `Pieza ${i} presenta falla`; // "throw" sería como un 
                                                      // console.log() + break
    console.log(`Pieza ${i} fabricada`)               // lanza un fallo en consola
}                                                     // y rompe la ejecución de
                                                      // todo lo demás.