let botonHola = document.getElementById("saludo")
let botonChau = document.getElementById("saludo")


botonHola.addEventListener("click", saludar);
// botonChau.addEventListener("click", despedir);

function saludar(){
    console.log("Hola")
    botonHola.innerText = "Bienvenido"
}