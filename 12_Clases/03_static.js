class Curso {                              
    constructor(titulo, dificultad) {     // "static" lo empleamos para guardar
        this.titulo = titulo;             // tanto Elementos, como Metodos dentro
        this.dificultad = dificultad;     // de una CLASE. Estas Propiedades no se
                                          // vana aver reflejadas en las Instancias
        this.lecciones = [];              // de los Objetos.
    }

    static BASE_URL = "http://mi-web/cursos/";      // Al estar dentro de una Clase,
                                                    // podemos invocarlar cuando
    static saludar = () => console.log("Hey man")   // queramos.
                                           
    agregarLeccion(leccion) {            
        this.lecciones.push(leccion);     
    };

    borrarUltimaLeccion(){
        this.lecciones.pop();
    }
};

const cursoJS = new Curso("JavaScript" ,1);    

console.log(cursoJS);       // No se muestra en el OBJETO

console.log(Curso.BASE_URL);    // Solo aparece si llamamos a la Clase

Curso.saludar();