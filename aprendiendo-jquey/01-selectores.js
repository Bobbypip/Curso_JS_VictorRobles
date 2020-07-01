$(document).ready(function () {
    // Selector de ID
    var rojo = $("#rojo").css("background", "red")
                         .css("color", "white");

    var amarillo = $("#amarillo").css("background", "yellow")
                                 .css("color", "green");

    var verder = $("#verde").css("background", "green")
                                 .css("color", "white");

    var mi_clase = $('.zebra').css("padding", "5px");

    $('.sin_borde').click(function(){
        console.log("Click dado!!");
        $(this).addClass('zebra');
    });

    //Selectores de etiqueta
    var parrafos = $('p').css('cursor', 'pointer');

    parrafos.click(function(){
        var that = $(this);
        if(!that.hasClass('grande')){
            that.addClass('grande');
        }else{
            that.removeClass('grande');
        }
    });

    //Selectores de atributo
    $('[title="Google"]').css('background', '#ccc');
    $('[title="Facebook"]').css('background', '#ccc');

    //Otros
    //$('p, a').addClass('margen-superior');

    //var busqueda = $('#caja').find('.resaltado');
    //var busqueda1 = $('#caja .resaltado');

    var busqueda = $('#elemento2').find('.resaltado'); 

    console.log(busqueda);
});