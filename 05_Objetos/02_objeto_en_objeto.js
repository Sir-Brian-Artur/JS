const IVA_GENERAL = 1.21;       //Constantes que no cambian, se 
const IVA_REDUCIDO = 1.10;      //escriben en mayusculas

const item1 = {                  //OBJ_1  
    precio: 15,
    cantidad: 2,
    impuestos: IVA_GENERAL
};

const item2 = {                 //OBJ_2
    precio: 25,
    cantida: 3,
    impuestos: IVA_REDUCIDO
};

const factura = {               //OBJ_3: OBJ_1,OBJ_2
    primerItem: item1,
    segundoItem: item2
}

const factura2 = {              //Podemos escribir la PROP y su OBJ de forma
    item1: item1,               //distinta o igual.
    item2: item2
}

const factura3 = {              //Cuando una PROP y su valor se llamar igual
    item1,                      //podemos hacer un atajo en la sinaxis 
    item2
}

console.log(factura3)