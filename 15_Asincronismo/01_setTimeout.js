// "setTimeout" nos permite establecer una demora para ejecutar una tarea.
// Una tarea no deja de ser un "callback".
// Callback: Función que se pasa a otra función, como Parámetro, para
// que se ejecute.

console.log("Hola, Pepito 👋");                       
setTimeout(() => console.log("Tiempo-fuera"), 3000);  // 
console.log("Hola, José 🖐"); 

// Pese a estar después del código asíncrono, "Hola, José" no va a esperar a que
// aparezca a respuesta del "Callback"

console.time("Hola 👋");                       
setTimeout(() => console.timeEnd("Hola 👋"), 3000);

// Con ".time" y ".timeEnd", y 2 identificadores iguales en ambas, podemos calcular
// cual es el tiempo exacto que pasa entre una ejecución y otra.