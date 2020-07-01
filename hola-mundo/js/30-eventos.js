'use strict'

window.addEventListener('load', () => {

    function cambiarColor(){

        var bg = boton.style.background;
    
        if(bg == "green"){
            boton.style.background = "red";
    
        }else{
            boton.style.background = "green";
        }
    
        return true;
    }
    
    // Eventos del raton
    var boton = document.querySelector("#boton");
    
    // Click
    boton.addEventListener('click', function(){
        cambiarColor();
        console.log(this);
        this.style.border = "10px solid black";
    });
    
    // Mouse over
    boton.addEventListener('mouseover', function(){
        boton.style.background = "#ccc";
    });
    
    // Mouse out
    boton.addEventListener('mouseout', function(){
        boton.style.background = "black";
    });
    
    // Focus
    var input = document.querySelector("#campo_nombre");
    
    input.addEventListener('focus', function(){
        console.log("[focus] Estas dentro del input");
    });
    
    // Blur
    input.addEventListener('blur', function(){
        console.log("[blur] Estas fuera del input");
    });
    
    //Eventos de taclas
    // Keydown
    input.addEventListener('keydown', function(event){
        console.log("[keydown] Pulsando esta tecla ", String.fromCharCode(event.keyCode));
    });
    
    // Keypress
    input.addEventListener('keypress', function(event){
        console.log("[keypress] Tecla presionada ", String.fromCharCode(event.keyCode));
    });
    
    // Keyup
    input.addEventListener('keyup', function(event){
        console.log("[keyup] Tecla soltada ", String.fromCharCode(event.keyCode));
    });

}); // End load
