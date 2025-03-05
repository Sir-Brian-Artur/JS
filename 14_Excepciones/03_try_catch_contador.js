const NUM_PIEZAS = 10;
const PROB_ERROR = 0.25;

let correctas = 0;
let defectuosas = 0;

const comprobacionFallo = () => Math.random() < PROB_ERROR;

for(let i = 1; i <= NUM_PIEZAS; i++){
    const defectuosa = comprobacionFallo();

    try {
        if(defectuosa) throw `¡¡Pieza ${i} presenta falla!!`;
        correctas++;
    } catch(ex){           
        defectuosas++;
    }
  
}

console.log(`${NUM_PIEZAS} Piezas fabricadas`);
console.log(`  -> ${correctas} favorables`);
console.log(`  -> ${defectuosas} desfavorables`);