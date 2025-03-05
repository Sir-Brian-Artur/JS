function saludar(nombre, apellido){             //Las funciones pueden tener varios
    console.log(`Hola ${nombre} ${apellido}.`)  //valores de entrada, pero sólo 1    
};                                              //de salida.

const resultado = saludar("Pablo");
console.log(resultado);                 //Nos devuelve UNDEFINED porque a la función
                                        //no le hemos indicado que nos devuelva nada.
                                        //tan sólo que efectúe un string

function saludo2(nombre){       //Con el RETURN le indicamos a la función cual es el
    return `Hola ${nombre}`     //valor que tiene que devolver. En principio sólo puede 
}                               //devolver un único valor; aunque un objeto, con varios
                                //valores en su interior, también es considerado un 
                                //unico valor

const operacion = saludo2("Carlos");    //Todo lo que devolvemos en la función, podemos 
console.log(operacion);                 //almacenarlo en una variable. Luego podemos
                                        //utilizar el valor de esa variable para otras 
                                        //operaciones.


const accion = saludo3('Maria');    //Puedo lamar a la función, incluso antes de 
console.log("Antes",accion)         //declararla; cuando tiene un nombre (F.Nominal).

function saludo3(nombre){               //Aparte del RETURN indicar qué debe devolver  
    return `Hola ${nombre}.`            //la función. También indica que la función 
    console.log('Después del return')   //termina. Todo lo que coloquemos después del 
}                                       //RETURN no se va a ejecutar.