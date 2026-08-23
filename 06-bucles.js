//alert("Hola esto se esta ejecutando desde el fichero #6")

//while

let i =  1
while(i<=10){
    document.write(i + "<br>")
i++
}

let limite = Number(prompt ("ingrese hasta que numero contar:"))
let i2 = 1;

while (i2 <= limite) {
    document.write(i2 + "<br>");
    i2++;
}

document.write(typeof(limite))

//bucle do..while

i=6

do{

document.write(`hola ${i} <br>`)
i++
}while (i<5);
document.writeln("saliste del programa")
