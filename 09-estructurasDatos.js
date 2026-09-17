// arrays
//un array es una estructura de datos que permite almacenar multiples valores en una sola variable. Los arrays pueden contener cualquier tipo de dato, incluyendo otros arrays y objetos.

let nombres = ["Diego", "Pablo", "Juan", "Maria", "Ana"]
console.log(nombres) // imprime el array completo

// Acceder a cada elemento

console.log(nombres[0]) // imprime el primer elemento del array
console.log(nombres[1]) // imprime el segundo elemento del array
console.log(nombres[2]) // imprime el tercer elemento del array
console.log(nombres[3]) // imprime el cuarto elemento del array
console.log(nombres[4]) // imprime el quinto elemento del array

// Recorrer cada nombre del array con un bucle for

for ( i = 0; i < nombres.length; i++) {
    console.log(nombres[i])
}

// Agregar un elemento al final del array con push()

nombres.push("Carlos")
console.log(nombres) // imprime el array completo con el nuevo elemento agregado al final

// Agregar un elemento al inicio del array con unshift()

nombres.unshift("Luis")
console.log(nombres) // imprime el array completo con el nuevo elemento agregado al inicio

// Eliminar el último elemento del array con pop()

nombres.pop()
console.log(nombres) // imprime el array completo sin el último elemento

// Eliminar el primer elemento del array con shift()

nombres.shift()
console.log(nombres) // imprime el array completo sin el primer elemento

// Eliminar un elemento en una posición específica con splice()

nombres.splice(2, 1) // elimina el elemento en la posición 2 (tercer elemento)
console.log(nombres) // imprime el array completo sin el elemento eliminado

// Reemplazar un elemento en una posición específica con splice()

nombres[1] = "Andres" // reemplaza el elemento en la posición 1 (segundo elemento) por "Andres"
console.log(nombres) // imprime el array completo con el elemento reemplazado

//includes para comprobar si un elemento existe en el array

nombres.includes("Andres")//
console.log(nombres.includes("Andres")) // imprime true si el elemento existe en el array, false si no existe

//indexOf para obtener la posición de un elemento en el array

console.log(nombres.indexOf("Andres")) // imprime la posición del elemento en el array, -1 si no existe

//slice para obtener una copia de una parte del array

let frutas = ["manzana", "banana", "naranja", "pera", "uva"]
let subfrutas = frutas.slice(1, 4) // obtiene una copia del array desde la posición 1 hasta la posición 4 (sin incluir la posición 4)
console.log(subfrutas) // imprime el array con los elementos seleccionados

//splice para eliminar elementos de un array

let vegetales = ["lechuga", "tomate", "pepino", "zanahoria", "cebolla"]
vegetales.splice(1, 0, "fresa", "mango") //empieza en la posición 1 y elimina 0 elementos, agregando "fresa" y "mango"
console.log(vegetales) //imprime el array completo con los elementos agregados


////operaciones basicas con arrays

//tamaño del array

console.log(nombres.length) // imprime el tamaño del array

//recorrer el array con forEach()

for ( i = 0; i < nombres.length; i++) {
    console.log(nombres[i])
}

//recorrer con for of

for (let nombre of nombres) {
    console.log(nombre)
}

let myArray= ["Diego", "Pablo", "Juan", "Maria", "Ana"]
let myArray2= new Array(3)

console.log(myArray) //imprime el array completo
console.log(myArray2) //imprime un array con 3 posiciones vacias


// estructuras de datos : set

//set es una estructura de datos que permite almacenar valores únicos, es decir, no permite valores duplicados. Los sets son útiles cuando se quiere almacenar 
//una colección de elementos sin importar el orden y sin permitir duplicados.

let setSinNada = new Set() // crea un set vacío

//set con valores iniciales

let Numeros = new Set([1, 2, 3, 4, 5]) // crea un set con valores iniciales
console.log(typeof(Numeros))// imprime el tipo de dato del set

// .add() para agregar elementos al set

let fruta = new Set()
fruta.add("manzana")
fruta.add("banana")
fruta.add("naranja")
fruta.add("pera")
fruta.add("uva")

console.log(fruta) // imprime el set completo con los elementos agregados

// has para comprobar si un elemento existe en el set

console.log(fruta.has("banana")) // imprime true si el elemento existe en el set, false si no existe

// delete para eliminar un elemento del set

fruta.delete("banana") // elimina el elemento "banana" del set
console.log(fruta) // imprime el set completo sin el elemento eliminado

// clear para eliminar todos los elementos del set

fruta.clear() // elimina todos los elementos del set
console.log(fruta) // imprime el set vacío

//ejemplo practico eliminar duplicados de un array con set
let arrayConDuplicados = ["manzana", "banana", "naranja", "manzana", "uva", "banana"]
let setSinDuplicados = new Set(arrayConDuplicados)
let arraySinDuplicados = Array.from(setSinDuplicados)
console.log(arraySinDuplicados) // imprime el array sin duplicados


