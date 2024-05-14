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

            var reszlet = "<h2>MI Órarend 2024 tavasz - Teljes</h2>"

            // Kurzusnév kiíratása
            
            var kurzusHtml = "<strong>Kurzusok:</strong>";

            data.PG_orarend.kurzusok.forEach(function(kurzus, index) {
                kurzusHtml += "<p><strong>Kurzusnév: </strong>" + kurzus.kurzusnev + "</p>" +
                              "<p><strong>Oktató: </strong>" + kurzus.oktato + "</p>" +
                              "<p><strong>Szak: </strong>" + kurzus.szak + "</p>" +
                              "<p><strong>Időpont:</strong></p>" +
                              "<ul>" +
                              "<li>Nap: " + kurzus.idopont.nap + "</li>" +
                              "<li>Tól: " + kurzus.idopont.tol + "</li>" +
                              "<li>Ig: " + kurzus.idopont.ig + "</li>" +
                              "</ul>" +
                              "<p><strong>Helyszín: </strong>" + kurzus.helyszin + "</p>";
                              if (index !== data.PG_orarend.kurzusok.length - 1) {
                                kurzusHtml += "<hr>";
                            }
            });

            // Adatok megjelenítése a területben
            var teruletHtml = fejlec + cimHtml + telefonszamok + reszlet + kurzusHtml;
            $('#terulet').html(teruletHtml);
        }
    });
});
});
