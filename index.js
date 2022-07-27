
//alert("Esto es un alert en JS")
//prompt("Esto es un prompt en JS")
//console.log("Esto se muestra en consola del navegador")
///alert("Welcome to JS!!! Funcion saludo en consola con 2 parametros")

function saludo(nombre, apellido){
    var fechaYHoraActual = new Date();
    var horaActual = fechaYHoraActual.getHours();
    var firstPartMessage = "";

    if(horaActual > 7 && horaActual < 13){
        //console.log ("Son mas de 7 y menor a las 19")
        firstPartMessage = `Buenos Dias, ${nombre + " " + apellido}`
    }
    if (horaActual > 13 && horaActual < 19){
        firstPartMessage = `Buenas Tardes, ${nombre + " " + apellido}`
    }
    if (horaActual > 19 && horaActual < 7){
        firstPartMessage = `Buenas Noches, ${nombre + " " + apellido}`
    }
    ///alert(firstPartMessage)
    ///console.log("Hola "+ nombre +" "+ apellido + " Son las " + new Date()) 
    var documentjs = document.getElementById("document-js")
    documentjs.innerText = (firstPartMessage)
    ///alert(`Hola ${nombre + " " + apellido} como estas`)
}

    saludo("Sergio", "Destefano")
    saludo("Angel", "Larghi")
    saludo("Juan", "Pasman")



    