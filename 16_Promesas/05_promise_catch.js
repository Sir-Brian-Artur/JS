const toNumber = n => Number(n);       
const multiply = n => {
   console.log("Multiply", n);
   if (n > 10){                                 // Si algo sale mal, "throw" lanza 
      throw new Error("Ago ha salido mal");     // un error
   } else {return n * 2 };                      // Si no, devuelve la operación.
};

const print = n => console.log(n);     

const catchAndPrint = (err) => {       // 1º Captura ese error del "throw"
   console.log(err);                   // 2º Imprime la captura
   return 1;                           // 3º Devuelve un resultado que le hemos 
};                                     // metido como valor por defecto.

const request = (url) => {             
   return new Promise ((resolve, reject) => {      
      const req = new XMLHttpRequest();  
      req.open("GET", url);    

      req.onload = () => {                            
         if (req.status === 200) {                    
            resolve(req.responseText);    
         } else {
            reject(new Error("Error al cargar"))   
         }                                           
      };

      req.onerror = () => {      
         reject(new Error("Error de red"));
      };

      req.send();
   })
};                                 // Los ".then()" que hay después de saltar 
                                   // una anomalía con "throw", no se ejecutan.                      
 request("./numero.txt")           
   .then(toNumber)                 // Sólo va a ejecutarse la función que esté
   .then(multiply)                 // en el próximo ".catch()"
   .then(multiply)
   .then(multiply)           
   .then(multiply)            
   .then(multiply)
   .catch(catchAndPrint)
   .then(multiply)
   .then(multiply)              // Como en la estructura TRY-CATCH-FINALLY, este
   .then(print)                 // ".finally()" se ejecuta siempre; independientemente
   .catch(catchAndPrint)        // de si arroja un ".catch()" o no.
   .then(multiply)
   .finally(()=>console.log("Se acabó la petición"));     
      