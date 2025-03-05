const objeto = {                // Dentro de un objeto podemos añadirle
    atributo1: 5,               // tanto "Atributos", como "Metodos"
    metodo1: () => {            
        console.log("Hola");    // "Atributos": valores
    }                           // "Metodos": funciones
}

// Una "Clase" es una plantilla para así general objetos que tienen las 
// mismas características.

class Curso {                               // 1. Crear "Clase":
    constructor(titulo, dificultad) {       // 1.1. "constructor"( PAR_EXTERNOS )
        this.titulo = titulo;               // 1.2a. "THIS"."CLAVE" = PAR_EXTER
        this.dificultad = dificultad;

        this.lecciones = [];                // 1.2b. "THIS"."CLAVE" = VALOR_PREFIJADO
    }
                                            // 2. Agregar "MÉTODOS_PROPIOS"
    agregarLeccion(leccion) {               // 2.1. MET( PAR ) {
        this.lecciones.push(leccion);       // 2.2.    Sentencia; }
    };

    borrarUltimaLeccion(){
        this.lecciones.pop();
    }
};
                                                // Instanciar clase / Crear objeto
const cursoJS = new Curso("JavaScript", 1);
const cursoTS = new Curso("TypeScript", 3);

cursoJS.agregarLeccion("Intro JavaScript");     // Invocar Método Propio
cursoJS.agregarLeccion("Variables");
cursoJS.agregarLeccion("Tipos de datos");

console.log(cursoJS, cursoTS);

const cursoPy = new Curso("Python");   // Puedo NO introducir "PAR" y dejarlo en  
cursoPy.dificultad = 2;                // "undefined"; y agregarlo más tarde.

cursoPy.claveInventada = "valorInventado"   // Al ser de tipado débil, me puedo 
                                            // inventar lo que quiera dentro.
cursoPy.borrarUltimaLeccion = () => console.log("Chanchito");
cursoPy.borrarUltimaLeccion();          // También puedo reasignar sus metodos y/o
console.log(cursoPy);                   // introducir unos nuevos.