//Una función es un tipo de dato que se utiliza para reutilizar código. Para no tener
//que copiar y pegar un montón de líneas de código, almacenamos ese código en una
//función; a la que más tarde invocaremos, cuando la necesitemos usar.

function saludar(nombre, apellido){                 //Entre los () colocamos los
    console.log(`Hola ${nombre} ${apellido}.`)      //ARGUMENTOS
};                                                  //Entre las {} colocamos el 
                                                    //código de la función

saludar("Pablo");               //Para invocarla tenemos que usar los paréntesis
                                //Dentro de los () colocamos los valores que van a 
                                //tener los ARGUMENTOS, en el mismo orden; como en una 
                                //tabla de SQL.

saludar("Marcos", "Salgueiro");         //Si no le pasamos un VALOR a un ARGUMENTO, este
                                        //va a usar un UNDEFINED.