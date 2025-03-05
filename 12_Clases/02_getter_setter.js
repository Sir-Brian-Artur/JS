class Curso {                              
    constructor(titulo, dificultad) {     
        this.titulo = titulo;               
        this._dificultad = dificultad;      // _propiedadPrivada

        this.lecciones = [];                
    }

    get dificultad(){               // Metodo para obtener cierta PROPIEDAD 
        console.log("GETTER")       // en concreto.
        return this._dificultad;            
    }

    set dificultad(nuevaDificultad){                //Metodo para introducir una nueva PROP
        if (nuevaDificultad > 0 && nuevaDificultad <= 5) {
            console.log("SETTER");
            this._dificultad = nuevaDificultad; 
        }                                            
        
    }

                                           
    agregarLeccion(leccion) {            // Método "agregarLeccion()"
        this.lecciones.push(leccion);     
    };

    borrarUltimaLeccion(){               // Método "borrarUltimaLeccion()"
        this.lecciones.pop();
    }
};

const cursoJS = new Curso("JavaScript" ,1);     // cuando creo desde cero NO 
                                                // llamo a nadie
cursoJS.dificultad = 3;         // Llamo a SETTER

console.log(cursoJS.dificultad)         // Llamo a GETTER
