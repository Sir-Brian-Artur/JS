const toNumber = n => Number(n);       
const multiply = n => n*2;            
const print = n => console.log(n);     

const catchAndPrint = (err) => console.log(err);

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
};                                                       
                                                        
 request("./numero.txt")
   .then(toNumber)            // Podemos tener múltiples ".then" con distintas o
   .then(multiply)            // repetidas funciones en su interior. Pero no podemos
   .then(multiply)            // tener nada después de un "console.log()" ya que 
   .then(multiply)            // este va a devolver UNDEFINED como callback.
   .then(print)
   .catch(catchAndPrint); 
         // ejecutamos varias funciones, en orden, sobre una respuesta "resolve"
         // 1º. Pasamos a Number, 2º. Multiplicamos *2, 3º. Imprimimos en consola