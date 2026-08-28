//funcion tradicional

function FuncionSaludar(){
console.log("ola k ace")
}
FuncionSaludar()



for (let i =0; i<5;i++){
FuncionSaludar()
}


let despedir =function(){
console.log("chaoluin")
}
FuncionSaludar()
despedir()


//funciones con parametros

function funcionParametros(name= "diego ", apellido = "giraldo"){  //argumentos se llama la info que se pasa
console.log("hola ${name},${apellido}")

}

funcionParametros()
funcionParametros("pablo", "medina")  //esta info se llama parametros

function suma(a=0, b=0) {
    console.log(a + b)
}

suma(5, 10)
suma(20,10)
suma(30, 10)
suma(5)
suma()


// funciones anonimas

const miFunc2 =function (name) {
    console.log('hola${name}!')
}
miFunc2('pablo')


//funciones flecha

const  miFunc3 = () => {
    console.log('hola')
}

const miFunc4 =(nombre) => console.log (`Hola $(nombre)`)

miFunc3()
miFunc4()


