const IVA = 1.21;       //NO puedo reasignar el valor de una 
                        //constante una vez declarada
let precio1 = 25;
precio1 = precio1 * IVA;    //Utilizaremos "let" cuando el valor
let precio2 = 15;           //vaya a ser modificado a posteriori.
precio2 = precio2 * IVA;     
                            //Usaremos "const" para TODOS lo demás
const cantidad1 = 3;        //casos. Probaremos a usarlo por defecto
const cantidad2 = 2;

const totalFactura = precio1 * cantidad1 + precio2 * cantidad2;

//No podemos nombrar una variable comenzando con un NUMERO

console.log(totalFactura);

//Los valores de constantes van en "SNAKE_CASE_UP"

//Las variables van en "camenCase"

let hola = "Hola";
let hola = "Hola2";
// No se pueden declarar variables ni constantes con el mismo nombre
//dentro del mismo hámbito. El identificador tiene que ser único para
// luego, cunado lo referenciemos, podamos saber a qué variables 
//exacta nos estamos refiriendo.

//Los ";" realmente son opcionales, aunque sí muy recomendables 
//cuando terminamos de escribir una línea. Por defecto, "VSCode" lo
//va a incorporar. Aunque ponerlo evita posibles problemas.