//EJERCICIOS OPERADORES


/* 1. Variable para cada operación aritmética */
const suma = 8 + 3;
const resta = 8 - 3;
const multiplicacion = 8 * 3;
const division = 8 / 3;
const modulo = 8 % 3;
const potencia = 8 ** 2;


console.log("Suma:", suma);
console.log("Resta:", resta);
console.log("Multiplicación:", multiplicacion);
console.log("División:", division);
console.log("Módulo:", modulo);
console.log("Potencia:", potencia);

/* 2. Variable para cada operación de asignación,
usando las variables anteriores */
let asignacionSimple = suma;
let asignacionSuma = resta;
asignacionSuma += suma;
let asignacionResta = multiplicacion;
asignacionResta -= resta;
let asignacionMultiplicacion = division;
asignacionMultiplicacion *= multiplicacion;
let asignacionDivision = potencia;
asignacionDivision /= division;
let asignacionModulo = modulo;
asignacionModulo %= 4;


console.log("=  :", asignacionSimple);
console.log("+= :", asignacionSuma);
console.log("-= :", asignacionResta);
console.log("*= :", asignacionMultiplicacion);
console.log("/= :", asignacionDivision);
console.log("%= :", asignacionModulo);

/* 3. 5 comparaciones verdaderas con diferentes operadores */
console.log("8 > 3:", 8 > 3);
console.log("3 < 8:", 3 < 8);
console.log("8 >= 8:", 8 >= 8);
console.log("3 <= 8:", 3 <= 8);
console.log("8 == '8':", 8 == "8");

/* 4. 5 comparaciones falsas con diferentes operadores */
console.log("8 < 3:", 8 < 3);
console.log("3 > 8:", 3 > 8);
console.log("8 <= 3:", 8 <= 3);
console.log("8 === '8':", 8 === "8");
console.log("8 != 8:", 8 != 8);

/* 5. Operador lógico and (&&) */
const tieneUsuario = true;
const tienePermiso = false;
console.log("tieneUsuario && tienePermiso:", tieneUsuario && tienePermiso);

/* 6. Operador lógico or (||) */
console.log("tieneUsuario || tienePermiso:", tieneUsuario || tienePermiso);

/* 7. Combinación de ambos operadores lógicos */
const esMayorDeEdad = true;
console.log(
"(tieneUsuario && esMayorDeEdad) || tienePermiso:",
(tieneUsuario && esMayorDeEdad) || tienePermiso
);

/* 8. Negación */
console.log("!tienePermiso:", !tienePermiso);

/* 9. Operador ternario */
const edad = 20;
const mensajeEdad = edad >= 18 ? "Es mayor de edad" : "Es menor de edad";
console.log(mensajeEdad);

/* 10. Combinación de operadores aritméticos, de comparación y lógicas */
const saldo = 500;
const precioProducto = 300;
const esClientePremium = true;

const puedeComprar =
(saldo - precioProducto >= 0) && (esClientePremium || saldo > 1000);

console.log("¿Puede comprar?:", puedeComprar);