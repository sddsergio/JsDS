let botonhola = document.getElementById("botonhola");
let botonchau = document.getElementById("botonchau");

botonhola.addEventListener("click", saludar);
botonchau.addEventListener("click", despedir);

function saludar(){
    alert (`Hola`);
}
function despedir(){
    alert (`Chau `);
}


///despedir("Sergio", "Destefano");