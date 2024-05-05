

function showSidebar() {
    $(".sidebar").css("display", "flex").animate({
        left: "0", // A sidebar bal szélére mozgatjuk
        opacity: 1
    }, 500); // Animáció időtartama 500ms (0.5 másodperc)
}

function hideSidebar() {
    $(".sidebar").animate({
        left: "-300px", // A sidebar bal szélét 300px-re helyezzük az ablak bal szélétől
        opacity: 0
    }, 500, function() {
        // Az animáció végén az elemet elrejtjük
        $(this).css("display", "none");
    });
}

function openURL(link) {
    // Az új ablakban megnyitás az új ablak paraméterekkel
    var currentURL = window.location.href;
    var cleanURL = currentURL.replace("index.html", "").replace("filmek.html", "").replace("sorozatok.html", "").replace("ujdonsagok.html", "");
    window.location.href = cleanURL + link;
}

$(document).ready(function(){
    $.getJSON("../../movies.json", function(data){
        var index_cardBody = $(".listBox .cardMovieList"); //ajanlott filmek
        var index_cardBody_2 = $(".listBox-2 .cardMovieList"); // ujabb filmek

        var sorozat_cardBody = $(".listBox-3 .cardMovieList"); //ajánlott sori
        var sorozat_cardBody_2 = $(".listBox-4 .cardMovieList"); // összes sori

        var film_cardBody = index_cardBody; // ajánlott film
        var film_cardBody_2 = $(".listBox-5 .cardMovieList"); // összes film

        var ujdonsag_cardBody = index_cardBody_2; // ujabb film
        var ujdonsag_cardBody_2 = $(".listBox-6 .cardMovieList"); // ujabb sori

        var index_data = data.recommended;
        var index_data_2 = data.latest;

        var sorozat_data = data.recommended_sorozat;
        var sorozat_data_2 = data.osszes_sorozat;

        var film_data = data.recommended;
        var film_data_2 = data.osszes_film;

        var ujdonsag_data = data.latest;
        var ujdonsag_data_2 = data.ujabb_sorozat;

        $.each(index_data, function(index, film){
            var item = '<div class="item" onclick="openURL(\'' + film.url + '\')">' +
                            '<img src="' + film.image + '" alt="Film logo">' +
                            '<div class="item-body">' +
                                '<div class="item-movie-datas">'+
                                    '<p class="p1">'+film.date + ' * '+film.duration+'</p>'+
                                    '<p class="p2">'+film.type+'</p>'+
                                '</div>'+
                                '<div class="item-title">'+
                                    '<h2>'+film.name+'</h2>'+
                                '</div>'+
                            '</div>' +
                        '</div>';
                        index_cardBody.append(item);
        });
        $.each(index_data_2, function(index, film){
            var item = '<div class="item" onclick="openURL(\'' + film.url + '\')" >' +
                            '<img src="' + film.image + '" alt="Film logo">' +
                            '<div class="item-body">' +
                                '<div class="item-movie-datas">'+
                                    '<p class="p1">'+film.date + ' * '+film.duration+'</p>'+
                                    '<p class="p2">'+film.type+'</p>'+
                                '</div>'+
                                '<div class="item-title">'+
                                    '<h2>'+film.name+'</h2>'+
                                '</div>'+
                            '</div>' +
                        '</div>';
                        index_cardBody_2.append(item);
        });
        ///////////////////
        $.each(sorozat_data, function(index, film){
            var item = '<div class="item" onclick="openURL(\'' + film.url + '\')" >' +
                            '<img src="' + film.image + '" alt="Film logo">' +
                            '<div class="item-body">' +
                                '<div class="item-movie-datas">'+
                                    '<p class="p1">'+film.date + ' * '+film.duration+'</p>'+
                                    '<p class="p2">'+film.type+'</p>'+
                                '</div>'+
                                '<div class="item-title">'+
                                    '<h2>'+film.name+'</h2>'+
                                '</div>'+
                            '</div>' +
                        '</div>';
                        sorozat_cardBody.append(item);
        });
        $.each(sorozat_data_2, function(index, film){
            var item = '<div class="item" onclick="openURL(\'' + film.url + '\')" >' +
                            '<img src="' + film.image + '" alt="Film logo">' +
                            '<div class="item-body">' +
                                '<div class="item-movie-datas">'+
                                    '<p class="p1">'+film.date + ' * '+film.duration+'</p>'+
                                    '<p class="p2">'+film.type+'</p>'+
                                '</div>'+
                                '<div class="item-title">'+
                                    '<h2>'+film.name+'</h2>'+
                                '</div>'+
                            '</div>' +
                        '</div>';
                        sorozat_cardBody_2.append(item);
        });
        ///////////////////////// összes film /%//////////////
        $.each(index_data_2, function(index, film){
            var item = '<div class="item" onclick="openURL(\'' + film.url + '\')" >' +
                            '<img src="' + film.image + '" alt="Film logo">' +
                            '<div class="item-body">' +
                                '<div class="item-movie-datas">'+
                                    '<p class="p1">'+film.date + ' * '+film.duration+'</p>'+
                                    '<p class="p2">'+film.type+'</p>'+
                                '</div>'+
                                '<div class="item-title">'+
                                    '<h2>'+film.name+'</h2>'+
                                '</div>'+
                            '</div>' +
                        '</div>';
            film_cardBody_2.append(item);
        });
        $.each(index_data, function(index, film){
            var item = '<div class="item" onclick="openURL(\'' + film.url + '\')" >' +
                            '<img src="' + film.image + '" alt="Film logo">' +
                            '<div class="item-body">' +
                                '<div class="item-movie-datas">'+
                                    '<p class="p1">'+film.date + ' * '+film.duration+'</p>'+
                                    '<p class="p2">'+film.type+'</p>'+
                                '</div>'+
                                '<div class="item-title">'+
                                    '<h2>'+film.name+'</h2>'+
                                '</div>'+
                            '</div>' +
                        '</div>';
            film_cardBody_2.append(item);
        });
        /////////////////////////
        $.each(ujdonsag_data_2, function(index, film){
            var item = '<div class="item" onclick="openURL(\'' + film.url + '\')" >' +
                            '<img src="' + film.image + '" alt="Film logo">' +
                            '<div class="item-body">' +
                                '<div class="item-movie-datas">'+
                                    '<p class="p1">'+film.date + ' * '+film.duration+'</p>'+
                                    '<p class="p2">'+film.type+'</p>'+
                                '</div>'+
                                '<div class="item-title">'+
                                    '<h2>'+film.name+'</h2>'+
                                '</div>'+
                            '</div>' +
                        '</div>';
                        ujdonsag_cardBody_2.append(item);
        });
    });
}); 


