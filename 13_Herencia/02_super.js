class Usuario {        
    constructor(name, email, pass){     
        this.name = name;                
        this.email = email;              
        this.pass = pass;               
    }                                   
                                                                                
    saludo(){
        console.log(`Bienvenido ${this.name}`);
    }

    login(email, pass){
        return this.email === email && this.pass === pass;
    }
}                                      
                                    
                                    
class Alumno extends Usuario {
    constructor(name, email, pass){
        super(name, email, pass);   // super_constructor: para heredar del
                                    // constructor padre los "this". Igualmente hay
        this.cursos = []            // que especificar los "PAR" que ingresa y maneja
    }
    agregarCurso(curso){
        this.cursos.push(curso)
    }
 
    despedida(){                        
        console.log(`Hasta luego, ${this.name}`);
    }
};  