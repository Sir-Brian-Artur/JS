class Usuario {        // = class Usuario extends Object {
    constructor(name, email, pass){     
        this.name = name;                
        this.email = email;             // Todas las clases llevan un         
        this.pass = pass;               // un "Constructor" implícito
    }                                   // aunque no lo veamos
                                                                                
    saludo(){
        console.log(`Bienvenido ${this.name}`);
    }

    login(email, pass){
        return this.email === email && this.pass === pass;
    }
}                                       // Todas las clases, como "Usuario" extienden 
                                        // de "Object". Pero a mayores, estamos 
                                        // definiendo que la clase "Alumno" extienda 
class Alumno extends Usuario {          // de "Usuario".
    despedida(){                        // "Alumno" < "Usuario" < "Object"
        console.log(`Hasta luego, ${this.name}`);
    }
};    
                                            

const pepeMari = new Usuario("PepeMari", "pepemari@gmail.com", "pepe123");
const lucinda = new Alumno("Lucinda", "lucinda@gmail.com", "lu123");

console.log(pepeMari);       // Aunque no se lo hayamos definido, por el mero hecho                           
console.log(lucinda);        // de venir de "Object" ya adquiere sus Métodos.

// "[[Prototipe]]" es donde se almacenan las funciones de la clase