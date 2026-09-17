//crea una funcion que reciba un nombre y muestre hola_bienvenido


function saludar(saludo){
let nombre =("pablo");
console.log(`Hola ${nombre}, bienvenido!`)
}

saludar()

// crea una funcion que reciba dos numero y muestre la suma de ellos

function suma(a=0, b=0) {
console.log(a + b )
}

suma(5, 10);
suma(20, 30);

//crea uan funcion que reciba dos numeros y muestre la resta de ellos

function resta(a=0, b=0) {
console.log(a - b )
}

resta(10, 5);
resta(20, 10);

//crea una funcion que reciba dos numeros  y retorne el mayor de ellos

function mayor(a=0, b=0) {
if (a > b) {
return a;
} else if (b > a) {
return b;
} else {
    return "Los números son iguales";
}
}

console.log(mayor(10, 5));
console.log(mayor(20, 30));
console.log(mayor(15, 15));


