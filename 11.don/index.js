//Las siglas DOM significan Document Object Model, o lo que es lo mismo, la estructura del documento HTML. Una página HTML está formada por múltiples etiquetas HTML, 
//anidadas una dentro de otra, formando un árbol de etiquetas relacionadas entre sí, que se denomina árbol DOM 
//ejemplo

let elementopadre=document.querySelector("#contenido")
let elementoHijo=document.createElement("h1")
let nuevoelemento=elementopadre.appendChild(elementoHijo)
nuevoelemento.innerText="hola alumnitos"


let elemento1Lista = document.createElement("li");
elemento1Lista.textContent = "It's Free";
listaSinOrden.appendChild(elemento1Lista);

let elemento2Lista = document.createElement("li");
elemento2Lista.textContent = "It's Awesome";
listaSinOrden.appendChild(elemento2Lista);