$(document).ready(function () {
    hideAll();
    $("#panel-default").fadeIn(300);

    $("#btn-subjective-quiz").click(function (e) { 
        e.preventDefault();
        hideAll();
        $("#panel-subjective-quiz").fadeIn(300);
    });
    $("#btn-placement-quiz").click(function (e) { 
        e.preventDefault();
        hideAll();
        $("#panel-placement-quiz").fadeIn(300);
    });
});

function hideAll() {
    $(".panel-item").hide();
}