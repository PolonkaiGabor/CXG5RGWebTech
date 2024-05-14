$(document).ready(function() {
    $('#betoltes').click(function() {
    $.ajax({
        url: 'PG_orarend1obj.json',
        dataType: 'json',
        success: function(data) {
            // Cím kiíratása
            var fejlec = "<h1>MISKOLCI EGYETEM</h1>";
            var cim = data.PG_orarend.cim.code + " " + data.PG_orarend.cim.city + " " + data.PG_orarend.cim.street;
            var cimHtml = "<p><strong>Cím:</strong> " + cim + "</p>";

            // Telefonszámok kiíratása
            var telefonszamok = "<strong>Telefonszámok</strong><ul>";
            data.PG_orarend["phone number"].forEach(function(telefon, index) {
                telefonszamok += "<li>" + telefon.type + ": " + telefon.number + "</li>";
            });
            telefonszamok += "</ul>";

            var reszlet = "<h2>MI Órarend 2024 tavasz - részlet</h2>"

            // Kurzusnév kiíratása
            var kurzus = data.PG_orarend.kurzusok[0]; // Az első kurzus adatai
            var kurzusnev = kurzus.kurzusnev;
            var oktato = kurzus.oktato;
            var szak = kurzus.szak;
            var idopont = kurzus.idopont;
            var helyszin = kurzus.helyszin;

            var kurzusHtml = "<p><strong>Kurzusnév: </strong>" + kurzusnev + "</p>" +
                              "<p><strong>Oktató: </strong>" + oktato + "</p>" +
                              "<p><strong>Szak: </strong>" + szak + "</p>" +
                              "<p><strong>Időpont:</strong></p>" +
                              "<ul>" +
                              "<li>Nap: " + idopont.nap + "</li>" +
                              "<li>Tól: " + idopont.tol + "</li>" +
                              "<li>Ig: " + idopont.ig + "</li>" +
                              "</ul>" +
                              "<p><strong>Helyszín: </strong>" + helyszin + "</p>";

            // Adatok megjelenítése a területben
            var teruletHtml = fejlec + cimHtml + telefonszamok + reszlet + kurzusHtml;
            $('#terulet').html(teruletHtml);
        }
    });
});
});
