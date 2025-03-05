String();           //Pasar a STRING
Number();           //Pasar a NUMBER
Boolean();          //Pasar a BOOLEAN

const cadena = "Hola";
const numero = 5;
const condicion = false;
const nulo = null;
let indefinido;

console.log(String(numero));
console.log(String(condicion));

console.log(Number(condicion));     //Funcionan practicamente igual.
console.log(Number(nulo));          //Pasan a ser 0

console.log(Boolean(""));   //La única opción para que un STRING 
                            //pase a ser un FALSE es que sea una 
                            //cadena vacía. De lo contrario siempre 
                            //será TRUE.

console.log(Boolean(0));    //Pasa algo similar con los números. Tan 
                            //solo el 0 pasa a ser FALSE; el resto 
                            //serán TRUE.

console.log(Boolean(nulo));         //Ambos siempre pasan a FALSE
console.log(Boolean(indefinido));