const persona = {           //Los OJBETOS, normalmente los albergamos en constantes
    nombre: 'Carmen',       //porque no los vamos a modificar por completo. Tan  
    apellido: 'Moure',      //sólo vamos a querer alterar alguna de sus PROP
    telefono: 607943112,
    edad: 26
}

                        //        1. Acceder a la propiedad de un objeto
console.log(persona.apellido)       //  A. Utilizando el operador "."
                                    //      OBJETO + . + PROPIEDAD

                                    
console.log(persona["telefono"])    //  B. Utilizando Array
                                    //      OBJETO + [ + " + PROPIEDAD + " + ]

                                //      2. Modificar un atributo
persona.nombre = 'Silvia';          //El conjunto OBJ.PROP actúa como una variable
console.log(persona.nombre);        //por lo que podemos reasignar su valor.

//No podemos modificar la constante "persona", pero sí las PROP internas.
