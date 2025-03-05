const item3 = {                         //Al igual que asignamos NUM o STRING a una
    precio: 10,                         //variable, también podemos asignar FUN_().
    cantidad: 4,                        //Esta es la forma en la que creamos MÉTODOS
    impuestos: IVA_GENERAL,
    calcularTotal: function () {                                
        return this.precio * this.cantidad * this.impuestos     
    }    
};
console.log(item3.calcularTotal())

//Un MÉTODO es una FUN. , guardada en un atributo, dentro de un objeto. 
//Para ejecutarlo tenemos que entrar en él. "OBJ + . + ATRI + ()"