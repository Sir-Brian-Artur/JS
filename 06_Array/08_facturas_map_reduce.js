const facturas = [
    {
        precio:23,          
        cantidad:1,         
    },                          // 1º. map()        No se puede hacer de forma
    {                           // 2º. reduce()     inversa porque los objetos
        precio:19,                               // son elementos complejos que
        cantidad:2,                              // nos dan problemas a la hora
    },                                           // de operar.
    {                                   
        precio:14,                    
        cantidad:4,
    },                             
    {                           // En una misma línea estamos haciendo el método       
        precio:22,              // "map()" para hacer la operación para cada elemento       
        cantidad:1,             // del Array; y luego, con "reduce()" nos dé el valor
    },                          // final de la agregación de todos los valores de este
]                               // nuevo Array.

const IVA = 1.21;

let total = facturas.map(i => i.precio * i.cantidad * IVA).reduce((a,b) => a + b);

console.log(total)         