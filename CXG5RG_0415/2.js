$(document).ready(function() {
    $("#k1").click(function() {
        $("ul li:first-child").hide();
        $("ul li:nth-child(2)").hide();
        $("#showParagraphs").hide();
    });

    $("#k2").click(function() {
        $("#k2").hide();
        $("#k1").trigger("click");
    });

    $("#k3").click(function() {
        $("header").hide();
        $("#k1").trigger("click");
    });

    $("#k4").click(function() {
        $("#k4").hide();
        $("ul li:first-child").hide();
        $("ul li:nth-child(2)").hide();
        $("#showParagraphs").hide();
    });

    $("#k5").click(function() {
        $("ul li:first-child").hide();
        $("ul li:nth-child(2)").hide();
        $("#showParagraphs").hide();
        $("table tr:even").hide();
    });
});