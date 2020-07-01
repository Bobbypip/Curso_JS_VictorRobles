$(document).ready(function(){
    var caja = $('#caja');

    $("#mostrar").hide();

    $("#mostrar").click(function(){
        $(this).hide();
        $("#ocultar").show();
        //$("#caja").fadeIn('slow');
        //$("#caja").fadeTo('slow', 0.8);
        //$("#caja").fadeTo('slow', 1);
        caja.slideDown('slow');
    });

    $("#ocultar").click(function(){
        $(this).hide();
        $("#mostrar").show();
        //$("#caja").fadeOut('slow');
        //$("#caja").fadeTo('slow', 0.2);
        //$("#caja").fadeTo('slow', 0;
        caja.slideUp('slow',function(){
            console.log("Cartel ocultado");
        });
    });

    $("#todoenuno").click(function(){
        //$("#caja").toggle('fast');
        //$("#caja").fadeToggle('fast');
        caja.slideToggle('fast');
    });

    $("#animar").click(function(){
        caja.animate({
                      marginLeft: '500px',
                      fontSize: '40px',
                      height: '110px'
                    }, 'slow')
            .animate({
                      borderRadius: '900px',
                      marginTop: '80px'
                    }, 'slow')
            .animate({
                      borderRadius: '0px',
                      marginLeft: '0px'
                    }, 'slow')
            .animate({
                      borderRadius: '100px',
                      marginTop: '0px'
                    }, 'slow')
            .animate({
                      marginLeft: '500px',
                      fontSize: '40px',
                      height: '110px'
                      }, 'slow');
    });
});