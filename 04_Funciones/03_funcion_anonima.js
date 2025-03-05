//Las funciones anónimas son aquellas que no tienen nombre.
//Lo que vamos a hacer es almacenarlas en una variable. Por
//lo que el nombre de esa función va a ser el nombre de la 
//variable.

function saludar(nombre){                   //Función NOMINAL
    return `hola ${nombre}, qué tal?`;
};

const saludar2 = function (nombre){         //Función ANÓNIMA guardada en CONSTANTE
    return `hola ${nombre}, qué tal?`;
}

const resultado = saludar2('Pablo');     //Invoco a la constante como si fuese
console.log(resultado);                  //una función; ya que se convierte en ello.

//No podemos lamar a una variable antes de declararla. Esto sí que lo podíamos 
//hacer para las Funciones Nominales.

//Podemos pasar esas Funciones Anónimas como PARÁMETROS a otras Funciones