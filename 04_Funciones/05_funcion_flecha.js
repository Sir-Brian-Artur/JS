const sumar = function (a,b) {      //1º Resultado de PAR_A + PAR_B
    return a + b
}

const multiplicarPorDos = function (numero) {   //2º Resultado de PAR_C * 2
    return numero * 2
}

const suma = sumar (2, 3);      //3º Invocar FUN_1 con PAR_A=2 y PAR_B=3

const multipicacion = multiplicarPorDos(suma)       //4º Invocar FUN_2 con valor de 
                                                    //FUN_3 como PARAMETRO

console.log(multipicacion)          //5º Mostrar resultado en consola


const sumar_ = (a,b) => a + b
const multiplicarPorDos_ = numero => numero * 2

// ---##  DE FUNCION ANONIMA A FUNCION FLECHA  ##---
//1º. Eliminamos la palabra clave "function" anerior a los PARAMETROS
//2º. Sustituimos por un "=>" posterior a la funcion
//3º. Si sólo hay un ARGUMENTO de entrada, eliminamos los paréntesis
        //Para funciones de 2 o más ARGUMENTOS sí que es necesario mantenerlos
//4º. Si la función contiene un simple "{ return }", también lo eliminamos. Y nos
//quedamos con el resto de línea de código.
        //Al no haber llaves, se asume que es un "return" implícito.