class Usuario {        
    constructor(name, email, pass){     
        this.name = name;                // Tanto un "CONSTRUCTOR" con nuevos atributos,
        this.email = email;              // como unos nuevos "MÉTODOS" en la clase
        this.pass = pass;                // hijo, método "SUPER"
    }                                   
};                                      
                                    
                                    
class Alumno extends Usuario {
    constructor(name, email, pass){     // constructor( PAR ) { "SUPER"( PAR ) }
        super(name, email, pass);       
                                    
        this.cursos = []          
    }                                                                       
};  

const pepeMari = new Usuario("PepeMari", "pepemari@gmail.com", "pepe123");
const lucinda = new Alumno("Lucinda", "lucinda@gmail.com", "lu123");

console.log(pepeMari instanceof Usuario);   // TRUE
console.log(lucinda instanceof Usuario);    // TRUE
console.log(pepeMari instanceof Alumno);    // FALSE
console.log(pepeMari instanceof Object);    // TRUE
console.log([] instanceof Object);    // TRUE

// "instanceof" es una pregunta que nos devuelve un BOOLEAN.
// Preguntamos si un OBJETO está instanciado por una CLASE o no.
// Así jugamos con las herencias

// El método "instanceof" es muy valioso para el tratamiento de errores. Ya que para
// el back-end le vamos a irdenar que nos mande una respuesta u otra, en función de
// a partir de qué tipo de "clase" está formado un objeto u otro.

// No vamos a tratar de la misma forma a un "Usuario_Standar" que a un "Alumno" 
// o un "Profesor". 