console.log('Hola')         /*  Cuando un navegador implementa JavaScript, por 
  OBJ  .MET ( PAR )             definición del lenguaje, tiene que haber un objeto
                                padre de todo. En este caso se llama "window", y ya
                                lo crea el navegador directamente.    */                      
window.console.log('Adiós')

// Si creeamos un OBJ_A , hacemos OBJ_A.algo(). Va a buscar ese 
// OBJ_A como un objeto en nuestras variables. Si no encuantra ese
// OBJ_A va a intentar buscar más arriba, gerarquicamente, hasta
// llegar al objeto WINDOW (el padre). Y si en WINDOW no existe,
// es cuando nos va a saltar ese error.

Pablo       // Como no hemos dclarado este objeto, nos salta el siguiente error
            // "Uncaught ReferenceError: Pablo is not defined". Básicamente porque
            // no está guardado en memoria.


            
const persona = {
  nombre: "Ana",
  edad: 30,
  saludar: function() {
    console.log("¡Hola!");
  }
};
            