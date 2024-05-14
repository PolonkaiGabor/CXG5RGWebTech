$(document).ready(function() {
    // Húzható elem inicializálása
    $("#draggable").draggable();

    // Elem megjelenítése gomb eseménykezelője
    $('#megjelenit').click(function() {
        $('#draggable').show("fold", 1000); // Elem megjelenítése animációval
    });

    // Elem elrejtése gomb eseménykezelője
    $('#elrejtes').click(function() {
        $('#draggable').hide("explode", 1000); // Elem elrejtése animációval
    });

    // Elem animálása gomb eseménykezelője
    $('#animacio').click(function() {
        $('#draggable').animate({
            width: "200px",
            height: "200px",
            lineHeight: "200px"
        }, 1000); // Elem animálása
    });
});
