$(document).ready(function() {
    // Doboz eltávolítása gomb eseménykezelője
    $('#eltavolitas').click(function() {
        $('#doboz').hide(); // Doboz elrejtése
    });

    // DIV elemek kiürítése gomb eseménykezelője
    $('#kiurites').click(function() {
        $('#doboz').empty(); // Doboz tartalmának kiürítése
    });
});
