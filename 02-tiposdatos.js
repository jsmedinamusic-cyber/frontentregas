//Cadenas de texto (String)//


let myName = "Diego"
let alias = "Don Diego"
let email = "diego.giraldo@example.com"

//Numeros (Number)//

let edad = 43 // numero entero//
let estatura = 1.72 // numero decimal//
let peso = 70.5 // numero decimal//


//Booleanos (Boolean)//

let hambre = true
let pereza = false

/*Bigint  o  numeroGrande  */

let bigint = ("9007199254740991n") // BigInt es un tipo de dato que puede representar enteros muy grandes. Se representa con una "n" al final del número.//
console.log(bigint)

//Null//
let sinValor = null // Null es un tipo de dato que representa la ausencia de valor.//

let variableIndefinida = undefined // Undefined es un tipo de dato que representa una variable que ha sido declarada pero no se le ha asignado un valor.// 
console.log(variableIndefinida)

console.log(typeof myName) // String
console.log(typeof alias) // string
console.log(typeof email) // string
console.log(typeof estatura) // Boolean
console.log(typeof hambre) // Boolean
console.log(typeof pereza) // BigInt
console.log(typeof sinValor) // Object (esto es un error histórico de JavaScript)
console.log(typeof variableIndefinida) // Undefined
console.log(typeof bigint) // BigInt
console.log(typeof edad) // Number

