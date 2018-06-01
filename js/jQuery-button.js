$(document).ready(function() {
pobierzDane();
});


function pobierzDane() {
    $('#btn').click(function () {
        $.getJSON("https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php", function(data) {
            $('body').append('<div id="dane-programisty">' + data.imie + "<br>" + data.nazwisko + '<br>' + data.zawod + '<p>' + data.firma + '</div>');
        });
    });
}