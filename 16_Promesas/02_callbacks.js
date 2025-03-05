const toNumber = n => Number(n);       // No debemos anidar Muchos Callback seguidos.
const multiply = n => n*2;             // Tener unos dentro de otros hace que el 
const print = n => console.log(n);     // código sea difícil de leer (Callback-Hell)

const thenFn = n => {            // FUN(CallBack(CallBack(CallBack(CallBack))))
   let number = toNumber(n); 
      number = multiply(number);        
      print(number); 
}

const thenAlternativo = (n) => console.log(n)

const catchAndPrint = (err) => console.log(err);

const request = (url, then, catchFn) => {
   const req = new XMLHttpRequest();  
   req.open("GET", url);    

   req.onload = () => {                            
      if (req.status === 200) {                    
         then(req.responseText);  
      } else {
         catchFn(new Error("Error al cargar"))          
      }
   };

   req.onerror = () => {      
      catchFn(new Error("Error de red"));
   };

   req.send();
};                                                       // "request()" lo manejamos 
                                                         // con Callbacks, así que no
request("./numero.txt", thenFn, catchAndPrint);          // es necesario modificar la
request("./numero.txt", thenAlternativo, catchAndPrint); // FUN. Sólo tenemos que usar
                                                         // un Callback distinto.
// request("./numero2.txt");        ← Error al cargar
// request("http://urlinventado.com")     ← Error de red