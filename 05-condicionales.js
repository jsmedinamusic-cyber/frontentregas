//if , else if , else//

// if (si)

let edad = 38
if (edad == 37){
console.log("la edad es 37")
}

// else (si no)

else{
console.log("la edad no es 37")

}

// else if (si no , si)

let edad_pension = 70
if(edad_pension >=65){
    console.log("tienes edad para pensionarte")
}
else if (edad_pension>=60){
    console.log("puedes pensionarte si tienes 30 años de cotizacion")
}else{
    console.log("no puedes pensionarte")
}

nombreUsuario = ""

if (nombreUsuario) {
    console.log(`Bienvenido, ${nombreUsuario}`);
}else{
    console.log("Bienvenido, invitado")
}

//otro ejemplo

tengoHambre = true;
tengoComida = false;
tengoPlata = false;

if (tengoHambre && tengoComida) {
console.log("Tengo hambre , tengo cmida, voy a comer")
}
else if (tengoHambre && tengoPlata) {
    console.log("tengo hambre, no tengo comida pero si tengo plata ,voy a comer algo afuera")
}
else{
    console.log("no puedo comer")
}

let dia = 9
let nombreDia

switch (dia) {
    case 0 :
        nombreDia = "Lunes"
        break
    
    case 1 :
        nombreDia = "Martes"
        break

    case 2 :
        nombreDia = "Miercoles"
        break

    case 3 :
        nombreDia = "Jueves"
        break
        
    case 4 :
        nombreDia = "Viernes"
        break
        
    case 5 :
        nombreDia = "Sabado"
        break
        
    case 6 :
        nombreDia = "Domingo"
        break
        
    default:
        nombreDia = "Numero de dia incorrecto"
    
}

console.log(nombreDia)

let mes = "Abril"
let estacion

switch (mes){

    case "Enero":
        estacion = "verano"
        break

    case "Febrero":
        estacion = "verano"
        break

    case "Marzo":
        estacion = "verano"
        break

    case "Abril":
        estacion = "verano"
        break
    
    case "Octubre":
        estacion = "verano"
        break

    case "Octubre":
        estacion = "verano"
        break

    default:
        estacion = "no es un mes"
}

console.log(estacion)

