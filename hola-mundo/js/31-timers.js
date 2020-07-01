'use strict'

window.addEventListener('load', function(){

    //Timers
    // var tiempo = this.setIntertval, se ejecuta continuamente
    // var tiempo = this.setTimeout, se ejecuta solo una vez

    function intervalo(){
        var tiempo = setInterval(function(){

            console.log("Set interval ejecutado");
    
            var encabezado = document.querySelector("h1");
            if(encabezado.style.fontSize == "50px"){
                encabezado.style.fontSize = "20px";
            }else{
                encabezado.style.fontSize = "50px";
            }
    
        }, 600);

        return tiempo;
    }

    var tiempo = intervalo();

    var stop = document.querySelector("#stop");

    stop.addEventListener('click', function(){
        alert("has parado el intevalo en bucle");
        clearInterval(tiempo);
    });

    var start = document.querySelector("#start");

    start.addEventListener('click', function(){
        alert("has iniciado el intevalo en bucle");
        intervalo();
    });

});