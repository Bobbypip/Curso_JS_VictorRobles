$(document).ready(function(){
    // Mover elemento por la pagina
    $('.elemento').draggable();

    // Redimencionar
    $('.elemento').resizable();

    // Seleccionar y ordenar elementos
    //$(".lista-seleccionable").selectable();
    $(".lista-seleccionable").sortable({
        update: function(event, ui){
            console.log("ha cambiado la lista");
        }
    });

    // Drop
    $("#elemento-movido").draggable();
    $("#area").droppable({
        drop: function(){
            console.log("Has soltado algo dentro de el area");
        }
    });

    //Efectos
    $("#mostrar").click(function(){
        $(".caja-efectos").
        //                toggle("fade");
        //                toggle("blind");
        //                toggle("slide");
        //                toggle("drop");
        //                toggle("fold");
        //                toggle("scale");
                        toggle("shake", "slow");
        //                toggle("shake", "4000");
        //                toggle("puff");
        //                fadeToggle();
        //                effect("explode");  
    })

    //Tooltip
    $(document).tooltip();

    // Dialog
    $("#lanzar-popup").click(function(){
        $("#popup").dialog();
    });

    // Datapicker
    $("#calendario").datepicker();
   
    // Tabs
    $("#pestanas").tabs();
});