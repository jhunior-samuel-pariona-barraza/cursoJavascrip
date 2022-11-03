//con la estructura de ciclo for
//mostrar los numeros pares entre 1 y 20
for(let i=2;i<=20;i+=2){
    console.log(i)
}
for(let i=1;i<=20;i++){
    if(i%2==0){
        console.log(i)
    }else{
        console.log(i)
    }
}
let vocales="aeiou"

console.log(vocales.length)
console.log(vocales[2])
for (let i=0;i<vocales.length;i++){
    console.log(vocales[i])
}
//
let texto="eucalipto"
let contador=0
for(let i=0;i<texto.length;i++){
    if (texto[i]=="a"){
        contador+=1
    }
}
console.log("tienes" , contador , "vocales a")
//
let eval =true
let eval2="salir"
while(eval==true){
    if (eval2=="salir"){
        console.log("adios")
        eval=false
    }
    console.log("hola")
}