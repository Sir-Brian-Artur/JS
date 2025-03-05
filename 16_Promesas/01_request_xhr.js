const toNumber = n => Number(n);
const multiply = n => n*2;
const print = n => console.log(n);


const req = new XMLHttpRequest();   // Hacemos llamada a la "API"
req.open("GET", "./numero.txt");    // Le pedimos un archvo

req.onload = () => {                            // Lo cargamos
   if (req.status === 200){                     // Si la respuesta el "OK"
      let number = toNumber(req.responseText);  // Guardamos el contenido en VARI
      number = multiply(number);          // Hacemos las operaciones con esa VARI 
      print(number);   
   } else {
      console.log("Error")             // Si no, pinta un "Error"
   }
};

req.onerror = () => {      
   console.log("Error");
};

req.send();