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
    } finally{
        console.log(`Fabricando pieza nº${i}`)
    }
}

console.log(`${NUM_PIEZAS} Piezas fabricadas`);
console.log(`  -> ${correctas} favorables`);
console.log(`  -> ${defectuosas} desfavorables`);

// Posible caso de TRY_CATCH_FINALLY
//  - TRY: Hago llamada a base de datos  ← (Dentro iría un IF-ELSE)
//  - throw: no funciona
//  - CATCH: Repito la misma petición 5 sec más tarde
//  - FINALLY: Cierro base de datos (No queremos que se quede abierta en ningún caso)