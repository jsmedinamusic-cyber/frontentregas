// Strings (cadenas de texto)

//  Concatenacion

let firstName = "Juan";
let saludo = "Hola, " + firstName + "!"; // Concatenacion con el operador +
console.log(saludo); // Hola, Juan!
console.log(typeof saludo); // string

// Longitud de una cadena de texto

console.log(saludo.length); // 11

// Acceso a caracteres individuales

console.log(saludo[0]);
console.log(saludo[10]);

// Metodos de cadenas de texto

// toUpperCase() y toLowerCase()
console.log(saludo.toUpperCase()); // HOLA, JUAN!
console.log(saludo.toLowerCase()); // hola, juan!
console.log(saludo.includes("Juan")); // true
console.log(saludo.includes("Pedro")); // false
console.log(saludo.indexOf("Juan")); // 6
console.log(saludo.indexOf("Pedro")); // -1
console.log(saludo.replace("Juan", "Pedro")); // Hola, Pedro!
console.log(saludo.slice(6, 10)); // Juan

