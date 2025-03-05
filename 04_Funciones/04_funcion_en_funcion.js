const obtenerSaludo = function(nombre){         //1º. Creo STRING con PAR_1
    return `Hola ${nombre}!`;
};

const imprimirSaludo = function(mensaje){       //2aº. Imprimo por consola 
    console.log(mensaje);                       //valor de PAR_2
};

const alertSaludo = function(mensaje){          //2bº. Lanzo Alert con valor
    alert(mensaje);                             //de PAR_2
};

const saludar = function(obtener, imprimir){    //3º. FUN_3 (PAR_A , PAR_B) 
    const saludo = obtener("Laura");            //3.1. FUN_A ("Laura")
    imprimir(saludo);                           //3.2. FUN_B (FUN_A)
};

saludar(obtenerSaludo, imprimirSaludo);         //4aº. Ejecuto FUN_3 con 
                                                //FUN_1 & FUN_2a
                                                
saludar(obtenerSaludo, alertSaludo);            //4bº. Ejecuto FUN_3 con
                                                //FUN_1 & FUN_2b