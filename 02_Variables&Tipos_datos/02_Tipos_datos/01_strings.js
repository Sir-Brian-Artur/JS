"Hola";  //Comillas dobles
'Hola';  //Comillas simples

console.log('Mi nombre es "Pablo"');    //Cuando queremos poner
console.log("Mi nombre es 'Marcos'");   //comillas para un string, 
                                        //alternamos entre simples
                                        //y dobles
`Hola`;  //Comas graves

//Las comas graves sirven para colocar "Template Strings" y así
//evitar que usemos strings con sólo un espacio de contenido.
const edad = 26
console.log(`Mi nombre es "Pablo" y tengo ${edad} años.`);

console.log('Mi nombre es "Pablo" y tengo' + ' ' + edad + ' ' + 'años.')
