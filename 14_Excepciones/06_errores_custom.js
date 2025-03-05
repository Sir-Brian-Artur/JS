const NUM_PIEZAS = 10;         // Creo 2 clases de "Errores" que heredan de la clase
const PROB_ERROR = 0.25;       // Error (sería como la Object).    
                              
let correctas = 0;                  
let defectuosas = 0;               

const comprobacionFallo = () => Math.random() < PROB_ERROR;

class ErrorPiezaDefectuosa extends Error{           // Los creo fuera para así
    constructor(i){                                 // llamarlos dentro
        super()
        console.log(`Pieza ${i} no sirve`)    
    }
};  

class ErrorCadenaParada extends Error{};   

for(let i = 1; i <= NUM_PIEZAS; i++){
    const defectuosa = comprobacionFallo();

    try {
        if(i === 4) throw new ErrorCadenaParada(`Se paró jaja`);                               
        if(defectuosa) throw new ErrorPiezaDefectuosa(i);
        correctas++;                      
    } catch(ex) {                  
        if ( ex instanceof ErrorCadenaParada)
            console.log('Se paró la cadena')
        //} else if (ex instanceof ErrorPiezaDefectuosa){
       //      console.log(`La pieza ${i} es defectuosa`)
        //} 
        console.log(ex)         
        defectuosas++;
    }
}

console.log(`${NUM_PIEZAS} Piezas fabricadas`);
console.log(`  -> ${correctas} favorables`);
console.log(`  -> ${defectuosas} desfavorables`);

const jaja = ()=> Error();
jaja()