function calculadora(opciones) {
    let i = 0;

    do {
        let opcion = opciones[i].op;
        let num1 = opciones[i].num1;
        let num2 = opciones[i].num2;
        let resultado;

        console.log("----------------------------");
        console.log("Opción elegida: " + opcion);

        if (opcion === "5") {
            console.log("Saliendo del programa...");
            break;
        }

        switch (opcion) {
            case "1":
                resultado = num1 + num2;
                console.log("El resultado de la suma es: " + resultado);
                break;
            case "2":
                resultado = num1 - num2;
                console.log("El resultado de la resta es: " + resultado);
                break;
            case "3":
                resultado = num1 * num2;
                console.log("El resultado de la multiplicación es: " + resultado);
                break;
            case "4":
                if (num2 === 0) {
                    console.log("Error: no se puede dividir entre cero.");
                } else {
                    resultado = num1 / num2;
                    console.log("El resultado de la división es: " + resultado);
                }
                break;
            default:
                console.log("Opción no válida.");
        }

        i++;

    } while (i < opciones.length);
}


const datosDePrueba = [
    { op: "1", num1: 10, num2: 5 },  // Sumar
    { op: "2", num1: 10, num2: 5 },  // Restar
    { op: "3", num1: 10, num2: 5 },  // Multiplicar
    { op: "4", num1: 10, num2: 5 },  // Dividir
    { op: "5", num1: 0, num2: 0 }    // Salir
];

calculadora(datosDePrueba);