const facturas = [
    {
        precio:23,          
        cantidad:1,         
    },                       
    {                          
        precio:19,                        
        cantidad:2,                             
    },                                          
    {                                   
        precio:14,                    
        cantidad:4,
    },                             
    {                       // El método "filter()" crea una copia superficial de una      
        precio:22,          // parte de una matriz determinada, filtrada solo para       
        cantidad:1,         // los elementos de la matriz determinada que pasan la 
    },                      // prueba implementada por la función proporcionada.    
]     

const IVA = 1.21;

let total = facturas.map(i => i.precio * i.cantidad * IVA).filter(i => i > 30)

console.log(total);

/* - - - - - - - - - - - - - - - - - - - - - - - - - */

const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word) => word.length > 6);
//                          valor  =>   filtro
console.log(result);      
                          