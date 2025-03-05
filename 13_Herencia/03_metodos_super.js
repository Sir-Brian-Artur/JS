class Usuario {        
    constructor(name, email, pass){     
        this.name = name;                // Tanto un "CONSTRUCTOR" con nuevos atributos,
        this.email = email;              // como unos nuevos "MÉTODOS" en la clase
        this.pass = pass;                // hijo, método "SUPER"
    }                                   
                                                                                
    login(email, pass){
        return this.email === email && this.pass === pass;
    }
}                                      
                                    
                                    
class Alumno extends Usuario {
    constructor(name, email, pass){     // constructor( PAR ) { "SUPER"( PAR ) }
        super(name, email, pass);       
                                    
        this.cursos = []   
        
        this.activo = false;
    }

    activar() {                         // met( PAR ){ return "SUPER".met }
        this.activo = true;
    }

    login(email, pass){                     // if(TRUE) & else FALSE es un añadido 
        if (!this.activo) return false;     // sobre el metodo sobreescrito
        return super.login(email, pass);
    }                           
                                        // Normalmente la parte Negativa suele ir
    agregarCurso(curso){                // por delante de la Positiva porque resulta
        this.cursos.push(curso)         // más legible y más restringible/segura.
    }                                                                          
};  

/*      [[  1º. ]]
    login(email, pass){
        return super.login(email, pass)
    }

        [[  2º. ]]
    login(email, pass){                     
        if (this.activo) return super.login(email, pass);
        else return false;
    } 

        [[  3º. ]]
    login(email, pass){                    
        if (!this.activo) return false;     
        return super.login(email, pass);
    }





 */