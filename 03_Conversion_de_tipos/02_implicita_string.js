const cadena = "5";
const numero = 5;
const condicion = true;
const nulo = null;
let indefinido;     //Los indefinidos los definiremos con LET

console.log(cadena + numero);       //STRING es el tipo más fuerte
console.log(cadena + condicion);    //cuando estamos sumando. Por
console.log(cadena + nulo);         //eso prevalece su tipo y se 
console.log(cadena + indefinido);   //convierten a STRING

console.log(numero + condicion);    //TRUE pasa a 1, al igual que 
                                    //FALSE pasaríaa 0

console.log(numero + nulo);         //NULL siempre se converte a 0

console.log(numero + indefinido);   /*Pasamos a ver un NaN que indica
                                    que lo que estamos calculando No es Un Numero; aunque este sí esté
                                    en formato NUMBER.*/

console.log(numero + cadena);   //Sale un "55" STRING   

console.log(numero - cadena);   /*Sale un 0 NUMBER porque no se   
                                puede hacer otra cosa que sumar los 
                                STRING. Así que pasa a ser un 
                                NUMBER*/
const cadena2 = "Hola";
console.log(numero - cadena2);  /* Cualquier cosa que no se pueda 
                                pasar a NUMBER, pasa a NaN. Todo lo operado con NaN, sigue siendo NaN*/

//Todo pasa a NUMBER cuando se trata de una operación que no sea SUMA