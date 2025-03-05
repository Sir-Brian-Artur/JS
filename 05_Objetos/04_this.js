const IVA_GENERAL = 1.21;       //Debemos emplear el "this" si queremos hacer la
const IVA_REDUCIDO = 1.10;      //operación con los valores guardados dentro del OBJ
                                
const item1 = {                       //Para "this" no valen las ()=>{} , por lo que
    precio: 15,                       //empleamos FUN_()
    cantidad: 2,                       
    impuestos: IVA_GENERAL,
    calcularTotal: function () {                                
        return this.precio * this.cantidad * this.impuestos     
    }                                                          
};

const item2 = {                         //"this" e "item2" hacen referencia al mismo
    precio: 25,                         //ámbito.
    cantidad: 3,                        //Sin el "this" podemos usar las "()=>{}"
    impuestos: IVA_REDUCIDO,            //Pero es una mala práctica porque deja de
    calcularTotal: () => {              //ser escalable
        return item2.precio * item2.cantidad * item2.impuestos
    }
};

const factura = {                       
    item1,                             
    item2,                              
    calcularTotal: function (descuento) {
        return (this.item1.calcularTotal() + this.item2.calcularTotal()) * descuento;   
    }
}                   //Acordarse de hacer la ejecución y no sólo mostrar la funcion

console.log(factura.calcularTotal(0.8))
