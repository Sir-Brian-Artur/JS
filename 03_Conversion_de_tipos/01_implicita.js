/*En JavaScript y en otros lenguajes de tipado dinámico, realizar 
operaciones entre valores de distinto tipo es posible. JavaScript va 
a convertir los 2 valores a un único tipo de valor común. Y a a 
intentar hacer esa operación siempre. Y lo va a hacer de una forma 
implícita.*/

let resultado = "2" + 2;    //1. Concatena el STRING con el NUMBER
console.log(resultado);     //2. Pasamos a ver un STRING "22"

resultado *= 2;             //3. Al querer hacer la multiplicación,
                            //como no es posible multiplical STRING,
                            //lo pasa nuevamente a NUMBER.

console.log(resultado);     //4. Imprimimos un NUMBER