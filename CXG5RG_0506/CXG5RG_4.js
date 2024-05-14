$(document).ready(function() {
    $("#draggable").draggable();

    $('#megjelenit').click(function() {
        $('#draggable').show("fold", 1000);
    });

    $('#elrejtes').click(function() {
        $('#draggable').hide("explode", 1000);
    });

    $('#animacio').click(function() {
        $('#draggable').animate({
            width: "200px",
            height: "200px",
            lineHeight: "200px"
        }, 1000);
    });
});
