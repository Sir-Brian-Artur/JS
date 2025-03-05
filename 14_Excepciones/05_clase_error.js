const NUM_PIEZAS = 10;              // "Error" es de tipo Object 
const PROB_ERROR = 0.25;            // ex.message : mensaje
                                    // ex.name : Nombre de la clase que hemos creado
let correctas = 0;                  // ex.stack : para saber dónde e ha dado la 
let defectuosas = 0;                //          excepción, tanto línea como archivo

const comprobacionFallo = () => Math.random() < PROB_ERROR;

function lanzarError() {
    throw new Error(`¡¡Pieza ${i} presenta falla!!`);
}

for(let i = 1; i <= NUM_PIEZAS; i++){
    const defectuosa = comprobacionFallo();

    try {                                   // ".stack" va muy bien para hacer un
        if(defectuosa) lanzarError();       // seguimiento de por dónde está saltando
        correctas++;                        // el error, ya que es muy común que unas
    } catch(ex) {                           // funciones estén llamando a otras,
        console.log(ex.stack)               // haciendo una cadena.
        defectuosas++;
    }
}

console.log(`${NUM_PIEZAS} Piezas fabricadas`);
console.log(`  -> ${correctas} favorables`);
console.log(`  -> ${defectuosas} desfavorables`);
