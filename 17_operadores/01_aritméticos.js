// 1. Operadores Aritméticos

// Se utilizan para realizar operaciones matemáticas.

// Operador	    Descripción	        Ejemplo
// +	        Suma	            2 + 3 → 5
// -	        Resta	            5 - 2 → 3
// *	        Multiplicación	    2 * 3 → 6
// /	        División	        6 / 2 → 3
// %	        Módulo (resto)	    7 % 3 → 1
// **	        Exponenciación	    2 ** 3 → 8
// ++	        Incremento	        let x = 2; x++ → 3
// --	        Decremento	        let x = 2; x-- → 1


// 2. Operadores de Asignación

// Se utilizan para asignar valores a variables.

// Operador	    Descripción	                    Ejemplo
// =	        Asignación simple	            let x = 5
// +=	        Suma y asignación	            x += 2 → x = x + 2
// -=	        Resta y asignación	            x -= 2 → x = x - 2
// *=	        Multiplicación y asignación	    x *= 2 → x = x * 2
// /=	        División y asignación	        x /= 2 → x = x / 2
// %=	        Módulo y asignación	            x %= 2 → x = x % 2
// **=	        Exponenciación y asignación 	x **= 2 → x = x ** 2


// 3. Operadores de Comparación
// Se utilizan para comparar valores y devuelven un booleano (true o false).

// Operador	    Descripción	                    Ejemplo
// ==	        Igualdad (sin tipo)	            2 == "2" → true
// ===	        Igualdad estricta (con tipo)	2 === "2" → false
// !=	        Desigualdad (sin tipo)	        2 != "2" → false
// !==	        Desigualdad estricta (con tipo)	2 !== "2" → true
// >	        Mayor que	                    3 > 2 → true
// <	        Menor que	                    3 < 2 → false
// >=	        Mayor o igual que	            3 >= 3 → true
// <=	        Menor o igual que	            3 <= 2 → false


// 4. Operadores Lógicos

// Se utilizan para combinar o invertir expresiones booleanas.

// Operador	    Descripción	            Ejemplo
// &&	        AND lógico	            true && false → false
// ||           OR lógico	            true || false → true
// !	        NOT lógico	            !true → false


// 5. Operadores de Cadena (String)

// Se utilizan para manipular cadenas de texto.

// Operador	    Descripción	            Ejemplo
// +	        Concatenación	        "Hola" + " Mundo" → "Hola Mundo"
// +=	        Concatenación y asignación	let x = "Hola"; x += " Mundo" → "Hola Mundo"


// 6. Operadores de Tipo
// Se utilizan para verificar el tipo de un valor.

// Operador	Descripción	Ejemplo
// typeof	Devuelve el tipo de dato	typeof 42 → "number"
// instanceof	Verifica si un objeto es instancia de una clase	[] instanceof Array → true


// 7. Operadores de Bit
// Se utilizan para manipular números a nivel de bits.

// Operador	Descripción	Ejemplo
// &	AND a nivel de bits	5 & 1 → 1
// `	`	OR a nivel de bits	`5	1→5`
// ^	XOR a nivel de bits	5 ^ 1 → 4
// ~	NOT a nivel de bits	~5 → -6
// <<	Desplazamiento a la izquierda	5 << 1 → 10
// >>	Desplazamiento a la derecha	5 >> 1 → 2
// >>>	Desplazamiento a la derecha sin signo	-5 >>> 1 → 2147483645
// 8. Operadores de Condición (Ternario)
// Se utiliza para asignar un valor basado en una condición.

// Operador	Descripción	Ejemplo
// ? :	Operador ternario	let x = (2 > 1) ? "Sí" : "No" → "Sí"
// 9. Operadores de Desestructuración
// Se utilizan para extraer valores de arrays o objetos.

// Operador	Descripción	Ejemplo
// []	Desestructuración de arrays	const [a, b] = [1, 2] → a = 1, b = 2
// {}	Desestructuración de objetos	const {x, y} = {x: 1, y: 2} → x = 1, y = 2
// 10. Operadores de Propagación (Spread)
// Se utilizan para expandir elementos de un array o propiedades de un objeto.

// Operador	Descripción	Ejemplo
// ...	Spread (propagación)	const arr = [1, 2, ...[3, 4]] → [1, 2, 3, 4]
// 11. Operadores de Miembro
// Se utilizan para acceder a propiedades de objetos o elementos de arrays.

// Operador	Descripción	Ejemplo
// .	Acceso a propiedad de objeto	obj.propiedad
// []	Acceso a propiedad o elemento	obj["propiedad"] o arr[0]
// 12. Operadores de Agrupación
// Se utilizan para agrupar expresiones.

// Operador	Descripción	Ejemplo
// ()	Agrupación	(2 + 3) * 4 → 20
// 13. Operadores de Coma
// Se utiliza para separar expresiones.

// Operador	Descripción	Ejemplo
// ,	Separador de expresiones	let x = (2, 3) → x = 3
// 14. Operadores de Nulos (Nullish Coalescing)
// Se utiliza para asignar un valor predeterminado si el valor es null o undefined.

// Operador	Descripción	Ejemplo
// ??	Nullish Coalescing	let x = null ?? "default" → "default"
// 15. Operadores de Opcionalidad (Optional Chaining)
// Se utiliza para acceder a propiedades de objetos de manera segura.

// Operador	Descripción	Ejemplo
// ?.	Optional Chaining	obj?.propiedad → undefined si obj es null o undefined
