let carro ="rojo";

if (carro){
    console.log("es mi color favorito.");
} else {
    console.log("no me gusta el carro.")
}
numeroMes=2
switch(numeroMes){
    case 1:
        console.log("enero")
        break
    case 2:
        console.log("febrero")
        break
    case 3:
        console.log("marzo")
        break
    case 4:
        console.log("abril")
        break
    default:
        console.log("error mes no encontrado")    
}
vocal="i"
switch(vocal){
    case "a" :case "e" :case"i" :case"o" :case"u" :
        console.log("la letra  " +vocal+ " es una vocal")
        break
        default:
            console.log("no es un vocal")
}