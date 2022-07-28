let botonhola = document.getElementById("eventhola");
let botonchau = document.getElementById("eventchau");
botonhola.addEventListener("click", saludar)
botonchau.addEventListener("click", despedir);

function saludar(){
    botonhola.innerText = "Bienvenido"
    alert("Hola como estas?") 
    }
function despedir(){
    botonchau.innerText = "Hasta pronto"
    alert("Hasta pronto") 

}

