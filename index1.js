let botonHola = document.getElementById("botonHola")
let botonChau = document.getElementById("botonChau")


botonHola.addEventListener("click", saludar);
botonChau.addEventListener("click", despedir);
function saludar(){
    console.log("Hola")
    alert (`Hola`);
    botonHola.innertext = "Bienvenido"
}
function despedir(){
    console.log("Chau")
    botonChau.innertext = "Hasta Luego"
    alert (`Chau `);
}


///despedir("Sergio", "Destefano");