// ===== WHILE =====

// 1. Muestra los números del 10 al 1 usando while
console.log
let i = 10;
while (i >= 1) {
console.log(i);
i--;
}

// 2. Muestra solo los números pares del 2 al 20 usando while
console.log;
let num = 2;
while (num <= 20) {
console.log(num);
num += 2;
}

// 3. Suma los números del 1 al 100 usando while
console.log
let suma = 0;
let contador = 1;
while (contador <= 100) {
suma += contador;
contador++;
}
console.log("La suma total es:", suma);


// ===== DO WHILE =====

// 1. Muestra los números del 1 al 100 con do...while
console.log
let n = 1;
do {
console.log(n);
n++;
} while (n <= 100);

// 2. Simula un menú que se repita hasta que la opción elegida sea 3
console.log

let opciones = [1, 2, 1, 3];
let indice = 0;
let opcion;

do {
opcion = opciones[indice];
console.log("----- MENÚ -----");
console.log("1. Opción uno");
console.log("2. Opción dos");
console.log("3. Salir");
console.log("Opción elegida:", opcion);

switch (opcion) {
    case 1:
    console.log("Ejecutando opción 1...");
    break;
    case 2:
    console.log("Ejecutando opción 2...");
    break;
    case 3:
    console.log("Saliendo del menú...");
    break;
    default:
console.log("Opción no válida.");
}

indice++;
} while (opcion !== 3);


// 3. Pide un número mayor que 10
let intentos = [3, 7, 10, 15]; 
let intentoIndex = 0;
let numero;

do {
numero = intentos[intentoIndex];
console.log("Número ingresado:", numero);

if (numero <= 10) {
    console.log("El número debe ser mayor que 10. Intenta de nuevo...");
}

intentoIndex++;
} while (numero <= 10);

console.log("Número válido ingresado:", numero);