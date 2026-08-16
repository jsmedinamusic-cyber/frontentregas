// Escribe un comentario en una linea
// Este es un comentario de una sola linea

/* Escribe un comentario en varias lineas
Este comentario ocupa
   varias lineas de texto */

// declara variables con valores asociados a todos los datos tipo primitivos
let nombre = "Juan Diego";      // string
let edad = 37;                  // number
let estaDespierto = true;       // boolean
let direccion;                  // undefined (no se le asigna valor)
let dato = null;                // null (ausencia intencional de valor)
let idUnico = Symbol("id");     // symbol
let numeroGrande = 12345678901234567890n; // bigint

// imprime en consola el valor de cada variable
console.log(nombre);
console.log(edad);
console.log(estaDespierto);
console.log(direccion);
console.log(dato);
console.log(idUnico);
console.log(numeroGrande);

// imprime en consola el tipo de dato de cada variable
console.log(typeof nombre);         // string
console.log(typeof edad);           // number
console.log(typeof estaDespierto);  // boolean
console.log(typeof direccion);      // undefined
console.log(typeof dato);           // object (peculiaridad conocida de JS)
console.log(typeof idUnico);        // symbol
console.log(typeof numeroGrande);   // bigint

// a continuacion modifica los valores de las variables por otros del mismo tipo
nombre = "Pablo Andres";
edad = 40;
estaDespierto = false;
direccion = "Calle 10 # 20-30";
dato = null; // sigue siendo null, mismo tipo
idUnico = Symbol("nuevoId");
numeroGrande = 987654321n;

console.log("--- Valores modificados (mismo tipo) ---");
console.log(nombre, typeof nombre);
console.log(edad, typeof edad);
console.log(estaDespierto, typeof estaDespierto);
console.log(direccion, typeof direccion);
console.log(dato, typeof dato);
console.log(idUnico, typeof idUnico);
console.log(numeroGrande, typeof numeroGrande);

// a continuacion modifica los valores de las variables por otros de distinto tipo
nombre = 30;              // ahora es number
edad = "treinta y siete";  // ahora es string
estaDespierto = "si";      // ahora es string
direccion = 12345;         // ahora es number
dato = "sin dato";         // ahora es string
idUnico = "yaNoEsSymbol";  // ahora es string
numeroGrande = 100;        // ahora es number

console.log("--- Valores modificados (distinto tipo) ---");
console.log(nombre, typeof nombre);
console.log(edad, typeof edad);
console.log(estaDespierto, typeof estaDespierto);
console.log(direccion, typeof direccion);
console.log(dato, typeof dato);
console.log(idUnico, typeof idUnico);
console.log(numeroGrande, typeof numeroGrande);

// declara constantes con valores asociados a todos los tipos de datos primitivos
const CONST_NOMBRE = "Ana Maria";          // string
const CONST_EDAD = 25;                     // number
const CONST_ACTIVO = true;                 // boolean
const CONST_INDEFINIDO = undefined;        // undefined
const CONST_NULO = null;                   // null
const CONST_SIMBOLO = Symbol("constante"); // symbol
const CONST_BIGINT = 999999999999999999n;  // bigint

console.log("--- Constantes ---");
console.log(CONST_NOMBRE, typeof CONST_NOMBRE);
console.log(CONST_EDAD, typeof CONST_EDAD);
console.log(CONST_ACTIVO, typeof CONST_ACTIVO);
console.log(CONST_INDEFINIDO, typeof CONST_INDEFINIDO);
console.log(CONST_NULO, typeof CONST_NULO);
console.log(CONST_SIMBOLO, typeof CONST_SIMBOLO);
console.log(CONST_BIGINT, typeof CONST_BIGINT);



//declaraciones basicas con var/let/const

var nombreCompleto = "Juan Diego";
console.log(nombreCompleto);

let apellido = "Perez";
console.log(apellido);

const segundoApellido = "Ruiz";
console.log(segundoApellido);