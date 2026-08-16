    //EJERCICIOS STRINGS


/* 1. Concatenar dos cadenas de texto */
const nombre = "Pablo";
const apellido = "Medina";
const nombreCompleto = nombre + " " + apellido;
console.log("=== 1. Concatenación ===");
console.log(nombreCompleto);

/* 2. Longitud de una cadena de texto */
console.log("\n=== 2. Longitud ===");
console.log("Longitud de '" + nombreCompleto + "':", nombreCompleto.length);

/* 3. Primer y último carácter de un string */
console.log("\n=== 3. Primer y último carácter ===");
console.log("Primer carácter:", nombreCompleto[0]);
console.log("Último carácter:", nombreCompleto[nombreCompleto.length - 1]);

/* 4. Convertir a mayúsculas y minúsculas */
console.log("\n=== 4. Mayúsculas / minúsculas ===");
console.log("Mayúsculas:", nombreCompleto.toUpperCase());
console.log("Minúsculas:", nombreCompleto.toLowerCase());

/* 5. Cadena de texto en varias líneas */
const textoMultilinea = `Musica
Urbana
Los 60`;
console.log("\n=== 5. Texto multilínea ===");
console.log(textoMultilinea);

/* 6. Interpolación de una variable en un string */
const curso = "Canto";
console.log("\n=== 6. Interpolación ===");
console.log(`Estoy aprendiendo ${curso} con ${nombre}.`);

/* 7. Reemplazar todos los espacios en blanco por guiones */
const frase = "Estoy estudiando en Cesde";
const fraseConGuiones = frase.replaceAll(" ", "-");
console.log("\n=== 7. Reemplazar espacios por guiones ===");
console.log(fraseConGuiones);

/* 8. Comprobar si una cadena contiene una palabra concreta */
console.log("\n=== 8. Contiene palabra ===");
console.log("¿Contiene 'Cesde'?:", frase.includes("Cesde"));

/* 9. Comprobar si dos strings son iguales */
const strA = "Pablo";
const strB = "Pablo";
console.log("\n=== 9. Igualdad de strings ===");
console.log("strA === strB:", strA === strB);
console.log("strA.toLowerCase() === strB.toLowerCase():", strA.toLowerCase() === strB.toLowerCase());

/* 10. Comprobar si dos strings tienen la misma longitud */
console.log("\n=== 10. Misma longitud ===");
console.log("strA.length === strB.length:", strA.length === strB.length);




