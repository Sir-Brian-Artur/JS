const facturas = [
    {
        precio:23,          // Tenemos un Array de objetos con sus propiedades
        cantidad:1,         
    },                     
    {                       
        precio:19,          
        cantidad:2,
    },
                                        // Para cada elemento del Array le pedimos 
    {                                   // una operación hecha con los valores de
        precio:14,                      // sus propiedades.
        cantidad:4,
    },                                  // Por esto mismo nos devuelve un nuevo
    {                                   // Array de 4 elementos, que en vez de ser
        precio:22,                      // OBJETOS, son NUMEROS.
        cantidad:1,
    },
]

const IVA = 1.21;

const totalFactura = facturas.map(i => i.precio * i.cantidad * IVA);
const facturaSeparada = totalFactura.forEach((element, index) => (`El elemento ${++index} cuesta ${element}€`))
console.log(totalFactura);
console.log(facturaSeparada)    // No podemos guardar la operación en una constante
                                // porque nos devuelve "UNDEFINED"

let total = 0;                          // 1. Iniciamos un contador en "0"
totalFactura.forEach(i => total += i)   // 2. Por cada elemento, suma su valor
console.log(total)                      // 3. Imprimimos ese valor ya modificado