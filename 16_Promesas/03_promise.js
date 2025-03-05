new Promise((resolve, reject) =>{      // Estructura Promise
   resolve(5);                // Se enviará al ".then" de las promesas
   reject(new Error())        // Se enviará al ".catch" de las promesas
})

const toNumber = n => Number(n);       
const multiply = n => n*2;            
const print = n => console.log(n);     

const thenFn = n => {          
   let number = toNumber(n); 
      number = multiply(number);        
      print(number); 
}

const thenAlternativo = (n) => console.log(n)

const catchAndPrint = (err) => console.log(err);

const request = (url) => {             // then y catchFN ya no son necesarios 
   return new Promise ((resolve, reject) => {
      const req = new XMLHttpRequest();  
      req.open("GET", url);    

      req.onload = () => {                            
         if (req.status === 200) {                    
            resolve(req.responseText);       //Sustituimos el "then()" por "resolve()"
         } else {
            reject(new Error("Error al cargar"))     // Sustituimos los "catchFn()"
         }                                            // por "reject()"
      };

      req.onerror = () => {      
         reject(new Error("Error de red"));
      };

      req.send();
   })
};                                                       
                                                        
 request("./numero.txt").then(toNumber).then(multiply).then(print); 
         // ejecutamos varias funciones, en orden, sobre una respuesta "resolve"
         // 1º. Pasamos a Number, 2º. Multiplicamos *2, 3º. Imprimimos en consola