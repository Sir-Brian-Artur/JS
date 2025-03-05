const error = (msg) => console.log(msg)   // Está arriba, pero lo hemos pensado más tarde

const tarea = (tarea, siguienteTarea, error) => {  // "tarea" lo creamos como FUN_modelo
   console.log(tarea);                             // para reutilizarlo a modo de
   if (Math.random() < 0.1) error();               // esquema en las siguientes FUNs
   else setTimeout(siguienteTarea, 500);           // Le especificamos 3 PAR, que son
}                                                  // los que vamos a manejar cuando
                                                   // usemos las FUN_reales
const pensarIdea = () => tarea(
   "Pensar Idea",
   guionizar,
   () => error("error al pensar idea")    // EJEMPLO DE CALLBACK HELL
);

const guionizar = () => tarea(
   "Guionizar",
   grabar,
   () => error("error al guionizar")
);

const grabar = () => tarea(
   "Grabar",
   editar,
   () => error("error al grabar")
);

const editar = () => tarea(
   "Editar",
   publicar,
   () => error("error al editar")
);

const publicar = () => tarea(
   'Publicar', 
   () => console.log("Publicado"), 
   () => error("Error al publicar")
);

pensarIdea;

                                          // CALLBACK HELL (como muñecas rusas)
const pensarIdea_2 = () => tarea(
   "Pensar Idea",
   () => tarea(
      "Guionizar",
      () => tarea(
         "Grabar",
         () => tarea(
            "Editar",
            () => tarea(
               'Publicar', 
               () => console.log("Publicado"), 
               () => error("Error al publicar")
            ),
            () => error("error al editar")
         ),
         () => error("error al grabar")
      ),
      () => error("error al guionizar")
   ),
   () => error("error al pensar idea")
);

