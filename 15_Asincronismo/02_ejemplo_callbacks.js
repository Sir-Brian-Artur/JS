const simple = (tarea) => console.log(tarea);

const pesada = (tarea) => {
   console.log(`Comenzando a ${tarea}...`);
   for(let i = 0; i < 3000000; i++){
      Math.random + Math.random * Math.random / Math.PI
   }
   console.log(`🐌 Fin de ${tarea}`);
}

const tareaPablo = (tarea, callback, tiempo) => {
   console.log(tarea);
   setTimeout(callback, tiempo);
}; 

const tareasDelDia = [
   () => simple("Escribir guión"),
   () => tareaPablo("[Pablo] Hacer miniatura", () => simple("->⏰ Revisar miniatura"), 2000),
   () => pesada("Grabar vídeo"),
   () => tareaPablo("[Pablo] Editar vídeo", () => simple("->⏰ Revisar video"), 50),
];// FUN_=>                  "tarea"                     "callback"             "tiempo"

for (const tarea of tareasDelDia) tarea(); // "for-of" : para cada elemento 
                                           // del Array

// for ( "elemento" of "Array" ) { sentencia }