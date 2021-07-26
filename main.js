const practica = (nombre, apellido, edad) => {
    if (edad < 18 ) {
        return (`${nombre} ${apellido} eres menor de edad`)
    }else if(edad > 60){
        return (`${nombre} ${apellido} eres mayor de edad y estas en la tercera edad`)
    }else{
        return (`${nombre} ${apellido} eres mayor de edad`)
    }
}

console.log(practica ('Joel', 'Vegas', 61)) 