//Básicamente es una función que se llama a sí misma cuando no sabes cuantas veces tienes que ejecutar la función.
// Normalmente aceptan un conjunto de elementos que pueden tener más elementos del mismo tipo. Deben tener algún tipo de condición que les permite terminar 
//para no quedarse haciendo una tarea indefinidamente.
//PRACTICA 
//ejemplo 1 Crear una función recursiva para contar el número de caracteres de una cadena.

function conteoRecursivo(texto) {
    return texto.length ? 1 + conteoRecursivo(texto.slice(1)) : 0;
}

function conteo(texto) {
    if (typeof texto != 'string') {
        throw TypeError('El argumento debe ser una cadena de caracteres.');
    }

    return conteoRecursivo(texto);
}

try {
    console.log(conteo('JavaScript'));  
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(conteo('Python'));  
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(conteo(''));  // 0
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(conteo(100));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
//ejemplo 2 Definir una función recursiva para realizar una búsqueda binaria sobre números.
Array.prototype.busquedaBinaria = function(numero) {
    let mitad = parseInt(this.length/2);

    if (numero === this[mitad]) {
        return mitad;
    }

    if (numero > this[mitad]) {
        return mitad + this.slice(mitad, this.length).busquedaBinaria(numero);
    } else {
        return this.slice(0, mitad).busquedaBinaria(numero);
    }
}

let datos = [3, 7, 2, 13, 11, 5, 19, 29, 17];
console.log(datos);
datos.sort((a, b) => a - b);
console.log(datos);

console.log();

console.log(datos.busquedaBinaria(2));  // 0
console.log(datos.busquedaBinaria(3));  // 1
console.log(datos.busquedaBinaria(19));  // 7
console.log(datos.busquedaBinaria(29));  // 8
//practica 3
const factorial = n => {
    if(n <= 1) return 1
    return n* factorial(n - 1);
}
factorial(3)