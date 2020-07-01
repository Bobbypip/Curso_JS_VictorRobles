'use strict'

window.addEventListener('load', function(){
    console.log("DOM cargado!!");

    var formulario = document.querySelector("#formulario");
    var box_dashed = document.querySelector(".dashed");
    box_dashed.style.display = "none";

    formulario.addEventListener('submit', function(){
        console.log("Evento submit capturado");

        var edad2 = String(document.querySelector("#edad2").value);
        console.log(edad2);
        var apellidos = document.querySelector("#apellidos").value;
        var edad = parseInt(document.querySelector("#edad").value);
        console.log(edad);

        if(apellidos.trim() == null || apellidos.trim().lenght == 0){
            alert("Los apellidos no son validos");
            return false;
        }

        if(edad == null || edad <= 0 || isNaN(edad)){
            alert("La edad no es valida");
            return false;
        }



        box_dashed.style.display = "block";

        var datos_usuario = [nombre, apellidos, edad];
        console.log(datos_usuario);

        var indice;
        
        for(indice in datos_usuario){
            var parrafo = document.createElement("p");
            parrafo.append(datos_usuario[indice]);
            box_dashed.append(parrafo);
        }

    });
})