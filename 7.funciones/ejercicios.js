function saludo(nombre,apellido){
    let saludo="hola como estas " +nombre
    return saludo
}
//para usar unja funcion debo llamar a la funcion 
console.log(saludo("jhunior","pariona"))
console.log(saludo("cristian","olarte"))
// contadore("eucalipto")//5  primera practica de funciones
function contare(palabra){
    const vocales = "aeiou";
    let cantidadVocales = 0;
    for (const letra of palabra) {
        if (vocales.includes(letra.toLowerCase())) {
            cantidadVocales++;
        }
    }
    return cantidadVocales;
}
console.log(contare("aaaaaaaaaa"))
//calcular(45;12,"resta")// 33 segunda practica de funciones 
function calcular (num1,num2,operacion){
    if(operacion=="suma"){
        total=num1+num2
    }
    if(operacion=="resta"){
        total=num1-num2
    }
    if(operacion=="multiplicacion"){
        total=num1*num2
    }
    if(operacion=="division"){
        total=num1/num2
    }
return total 
}
console.log(calcular(45,12,"division"))