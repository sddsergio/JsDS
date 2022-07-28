
//alert("Esto es un alert en JS")
//prompt("Esto es un prompt en JS")
//console.log("Esto se muestra en consola del navegador")
///alert("Welcome to JS!!! Funcion saludo en consola con 2 parametros")

function saludo(nombre, apellido){
    
    // var divRelleno = document.getElementById("div");

    console.log('Hola: '+ " " + nombre + " " + apellido)
        
    var fechaYHoraActual = new Date();
    var horaActual = fechaYHoraActual.getHours();
    
    var divRelleno = document.getElementById("div");
    divRelleno.innerText = 'Hola ' + nombre + " " + apellido

    if (horaActual >= 7 && horaActual <= 13){
        console.log('Buen Dia !!! ' + nombre)
    }
    if (horaActual > 13 && horaActual <= 19){
        divRelleno.innerText = 'Buenas Tardes!!!' + nombre 
        console.log('Buenas Tardes!!!' + nombre)
    }
    if (horaActual >= 0 && horaActual < 7){
        divRelleno.innerText = 'Es de Noche ' + nombre 
        console.log("Es de Noche!!!")
    }
}
    // if(horaActual > 7 && horaActual < 13){
    //     console.log ("Son mas de 7 y menos que las 13")
    // firstPartMessage = `Buenos Dias, ${nombre + " " + apellido}`
    // }
    // if (horaActual > 13 && horaActual < 19){
    //     console.log("Son mas de las 13 y menos de las 19")
    //     firstPartMessage = `Buenas Tardes, ${nombre + " " + apellido}`
    // }
    // if (horaActual > 19 && horaActual < 7){
    //     console.log("Son mas de las 19 y menos que las 7")
    //     firstPartMessage = `Buenas Noches, ${nombre + " " + apellido}`
    // }


   

   
  


    