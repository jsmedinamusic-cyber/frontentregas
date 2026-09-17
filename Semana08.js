const readlineSync = require('readline-sync')

// 1. Crea un array con 5 ciudades.

let ciudades = ["Bogotá", "Medellin", "Cali", "Cartagena", "Bucaramanga"]

// 2. Muestra todas con for.

console.log("Ciudades:")
for (let i = 0; i < ciudades.length; i++) {
    console.log(ciudades[i])
}

// 3. Agrega una ciudad nueva.

ciudades.push("Pereira")
console.log("Después de agregar una ciudad:", ciudades)

// 4. Elimina la primera.

ciudades.shift()
console.log("Después de eliminar la primera:", ciudades)

// 5. Cambia la tercera.

ciudades[2] = "Manizales"
console.log("Después de cambiar la tercera:", ciudades)

// 6. Pide nombres hasta escribir "fin" (do...while) y guarda los nombres en un array.

let nombres = []
let nombre

do {
    nombre = readlineSync.question("Escribe un nombre (o 'fin' para terminar): ")
    if (nombre.toLowerCase() !== "fin") {
        nombres.push(nombre)
    }
} while (nombre.toLowerCase() !== "fin")

// 7. Muestra cuántos nombres hay.

console.log("Nombres ingresados:", nombres)
console.log("Cantidad de nombres: " + nombres.length)

// 8. Busca un nombre Di si existe o no.

let busqueda = readlineSync.question("¿Qué ciudad quieres buscar? ")

if (ciudades.includes(busqueda)) {
    console.log(busqueda + "' SÍ existe en la lista.")
} else {
    console.log(busqueda + "' NO existe en la lista.")
}
