const cursoJS = [               // El bucle "For Of" por detrás está haciento esto    
    "Intro a JS",               // const element = array[i]     
    "Variables y tipos",               
    "Conversion de tipos",          // No está pensado usar la "i" para un "For OF"
    "Funciones",                    // No reinventar la rueda. Si necesitamos un 
];                                  // bucle indexado, utilizamos un "For"

for(let i = 0; i < cursoJS.length; i++){                    
    console.log(cursoJS[i]);                       
};                                  // const array1 = ['a', 'b', 'c'];            
                                                
for(const leccion of cursoJS){      // for (const element of array1) {            
    console.log(leccion);           //    console.log(element);            
};                                  // }

// El orden de ejecución siempre va a ir incrementando de 1 en 1