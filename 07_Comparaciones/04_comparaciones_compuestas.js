const a = 1;                // && : Operador "AND"
const b = 2;                // || : Operador "OR"
const c = 3;

console.log(a < b);
console.log(b < c);             // Con el operador "AND" ambas condiciones tienen 
                                // ser "TRUE" para que este dé "TRUE".
console.log(a < b && b < c);

console.log(a < b || b > c);    // Con el operador "OR" sólamente puede ser "FALSE"
                                // si ambas operaciones son "FALSE".