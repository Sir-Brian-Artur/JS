const positivo = true;
const negativo = false;

const nulo = null;      //"null" es un valor que no vale nada

const indefinido = undefined;   //"undefined" es como si guardásemos 
                                //una variable, pero no le 
                                //indicásemos un valor
console.log(nulo);

const array = []
const object = {}
const funcion = ()=>{}

console.log(typeof nulo)    //Valores nulos, array y objetos son
console.log(typeof [])      //considerados como valores objeto      
console.log(typeof {})

console.log(typeof funcion)     //Las funciones son funciones