//Operadores Aritmeticos

let a = 5;
let b = 10;

console.log(a + b) // Suma
console.log(a - b) // Resta
console.log(a * b) // Multiplicacion
console.log(a / b) // Division
console.log(a % b) // Modulo (residuo de la division)
console.log(a ** b) // Exponente (a elevado a la potencia de 2)

//Particularidad

console.log("5" + 1) // Concatenacion (5 + 1 = 51) Lo toma como un string y lo concatena
console.log("5" - 1) // Resta (5 - 1 = 4)

//Operadores Unarios // operadores que actuan sobre un solo operando
// (un unico valor o variable) para producir un resultado

//Post incremento usa el valor(5) y luego lo incrementa en 1 asi en circulo segun se pida
console.log(a++) // 5
console.log(a) // 6

//Pre incremento incrementa en 1 y luego usa el valor(11) asi en circulo segun se pida "b es 10"
console.log(++b) // 11

//Post decremento usa el valor(10) y luego lo decrementa en 1 asi en circulo segun se pida
console.log(b--) // 10
console.log(b) // 9

//Pre decremento decrementa en 1 y luego usa el valor(8) asi en circulo segun se pida "b es 9"
console.log(--b) // 8

//Operadores de Asignacion

let myVariable = 2;
console.log(myVariable) // 2
myVariable += 4; //  Suma con asignacion
console.log(myVariable) // 6

myVariable -= 4; // Resta con asignacion
console.log(myVariable) // 2

myVariable *= 4; // Multiplicacion con asignacion
console.log(myVariable) // 8

myVariable /= 4; // Division con asignacion
console.log(myVariable) // 2

myVariable %= 4; // Modulo con asignacion
console.log(myVariable) // 2

myVariable **= 4; // Exponente con asignacion
console.log(myVariable) // 16

// Operadores de comparacion

console.log(5< 10) // true
console.log(5> 10) // false
console.log(5<= 10) // true
console.log(5>= 10) // false
console.log(5== "5") // true  compara solo valores, no tipos de datos
console.log(5=== "5") // false  compara valores y tipos de datos
console.log(5!= "5") // false  compara solo valores, no tipos de datos
console.log(5!== "5") // true  compara valores y tipos de datos



// Operadores logicos

// and (&&) devuelve true si ambos operandos son verdaderos

console.log(5 >10 && 15 > 20) // false
console.log(5 <10 && 15 < 20) // true
console.log(5 <10 && 15 > 20) // false
console.log(5 >10 && 15 > 20 && 30 > 40) // false

// or (||) devuelve true si al menos uno de los operandos es verdadero

console.log(5 >10 || 15 > 20) // false
console.log(5 <10 || 15 < 20) // true
console.log(5 <10 || 15 > 20) // true
console.log(5 >10 || 15 > 20 || 30 > 40) // false

// not (!) devuelve true si el operando es falso y false si el operando es verdadero

console.log(!(5 >10)) // true
console.log(!(5 <10)) // false

// Operador ternario (condicion ? valorSiVerdadero : valorSiFalso)

const estaLloviendo = "true";
estaLloviendo ? console.log("esta lloviendo") :
console.log("si esta lloviendo") // estaLloviendo


/*Truthty values ( valores verdaderos)

todos los numeros positivos y negativos, excepto el 0, son considerados verdaderos
todas las cadenas de texto, excepto la cadena vacia "", son consideradas verdaderas
todos los objetos, excepto null, son considerados verdaderos
todos los arrays, excepto [], son considerados verdaderos
todos los simbolos, excepto Symbol(), son considerados verdaderos
todos los BigInt, excepto 0n, son considerados verdaderos

Falsys values (valores falsos)

el numero 0 es considerado falso
la cadena vacia "" es considerada falsa
el valor null es considerado falso
el valor undefined es considerado falso
el valor NaN (Not a Number) es considerado falso
el valor false es considerado falso
el valor 0n (BigInt cero) es considerado falso
*/




