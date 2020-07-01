'use strict'

// Localstorage

// Comprobar disponibilidad de Localstorage
if(typeof(Storage) !== 'undefined'){
    console.log("Localstorage disponible");
}else{
    console.log("Incompatible con Localstorage");   
}

// Guardar datos
localStorage.setItem("titulo", "Curso de Symfony");

// Recuperar elemento
//console.log(localStorage.getItem("titulo"));
document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo");

// Guardar objetos
var usuario = {
    nombre: "Victor Robles",
    email: "victor@victor.com",
    web: "victorroblesweb.es"
};

localStorage.setItem("usuario", JSON.stringify(usuario));

// Recuperar objeto
var userjs = JSON.parse(localStorage.getItem("usuario"));

document.querySelector("#datos").append(" " + userjs.web + " " +userjs.nombre);

localStorage.clear();
//localStorage.removeItem("usuario");
