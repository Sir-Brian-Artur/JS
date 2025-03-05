const IVA_GENERAL = 1.21;           // El Sistema de Referenciado se emplea para los
                                    // objetos/funciones, ya que estos pueden llegar
const item_A = {                    // a ser muy grandes.
    precio: 15,                     
    cantidad: 2,                       
    impuestos: IVA_GENERAL,
    calcularTotal: function () {                                
        return this.precio * this.cantidad * this.impuestos     
    }                                                          
};

const item_B = item_A;          // Todas las modificaciones que haya en "item_A" e
item_B.precio = 23;             // "item_B" van a reflejarse igual en ambos. Porque
                                // ambos son el mismo objeto.
console.log(item_A.precio)   

/*  item_Referencia --> {}              item_Primitivo --> String
                    --> []                             --> Number
                    --> ()                             --> Boolean
                                                       --> Null
                                                       --> Undefined
*/