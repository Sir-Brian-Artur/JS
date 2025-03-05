const cursoJS = [                   // "for" crea un bucle que consta de 3 expresiones,
    "Intro a JS",          // 0     // y una sentencia que se repetirá cada vuelta.
    "Variables y tipos",   // 1    
    "Conversion de tipos", // 2     // Mucho + eficiente que "forEach" o "Map"
    "Funciones",           // 3
];

// for (Initializacion; Condicion; Actualizacion) { Sentencia }

for(let i = 0; i < cursoJS.length; i++){    // curso.lenght = 4                   
    console.log(`${i+1}. ${cursoJS[i]}`);   // curso[1] = "Variables y tipos"                     
};

for (let i = cursoJS.length-1 ; i >= 0 ; i--){  // El valor "i" va a ser SIEMPRE un 
    console.log(`${i+1}. ${cursoJS[i]}`);       // "let" porque se va a ir modificando
}                                               // en cada iteracción.