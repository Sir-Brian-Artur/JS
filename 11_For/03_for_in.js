const cursoJS = [                // cursoJS = [  
    "Intro a JS",                //    0 : "Intro a JS",
    "Variables y tipos",         //    1 : "Variables y tipos",
    "Conversion de tipos",       //    2 : "Conversion de tipos", 
    "Funciones",                 //    3 : "Funciones",
];                               //  ]

for(const leccion of cursoJS){        // Iteramos con los Valores del Objeto/Array    
    console.log(leccion);           
};                                  

for(const leccion in cursoJS){        // Iteramos con las Claves del Objeto/Array      
    console.log(leccion);           
};                              // Devuelve la "Clave", no el "Indice";           
                                // aunque ambos coincidan.
                                

/*   Objeto = { clave1 : valor1             Array = [ valor1, valor2, valor3 ]
                clave2 : valor2
                clave3 : valor3 }       En el "Array" omitimos la clave porque
                                        ya la coloca por defecto. Esta coincide
                                        con el Indice.
                                        */
