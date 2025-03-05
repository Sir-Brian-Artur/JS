const toNumber = n => Number(n);       
const multiply = n => {
   console.log("Multiply", n);
   if (n > 10){                               
      throw new Error("Ago ha salido mal");    
   } else {return n * 2 };                      
};

const print = n => console.log(n);     

const catchAndPrint = (err) => {     
   console.log(err);             
   return 1;                       
};                              

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
   .then(print)                 
   .catch(catchAndPrint);        // Podemos hacer uso del operador "ASYNC" para hacer
                                 // que nuestra función no dependa de promesas directas;
                                 // y tener que estar esperando a una sucesión de "then()";
const call = async (url) => {    // los cuales pueden demorar o fallar.
   try {
      const response = await request(url);      // Con "AWAIT" guardamos el resultado
      const response2 = await request(url);     // de una promesa, que nos llegará en
                                                // el futuro, en una constante.
      const n1 = toNumber(response);
      const n2 = toNumber(response2);     // Con esa promesa sobre la constante, ya 
      print(n1 * n2);                     // somos capaces de operar con normalidad
   } catch (error) {
      catchAndPrint(error);      // Podemos usar el "TRY-CATCH" como si fuese una
   }                             // función síncrona.
};

call("./numero.txt");         // Resulta mucho más sencillo hacer un "ASYNC-AWAIT"
                              // para operar con promesas. Que adaptar todo el código
const prom = async () => {}   // posibles "then-catch" de los que no tenemos real
                              // certeza, y que se ven muy engorrosos.