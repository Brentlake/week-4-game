$(document).ready(function() {

    //Variables
    var counter = 0;
    var wins = 0;
    var losses = 0;
    var score = 0;
    var random = randomIntFromInterval(19, 120);

    //Setting scores on html
    $('#randnum').text(random);
    $('#score').text(counter);
    $('#score').text(score);
    $('#win').text(wins);
    $('#loss').text(losses);

    var crystal1;
    var crystal2;
    var crystal3;
    var crystal4;


    //crytal clicks
    $('#img1').click(function() {
        crystal1 = Math.floor((Math.random() * 12) + 1);

        console.log(crystal1);
        $("#score").text(crystal1);


    });

    $('#img2').click(function() {
        crystal2 = Math.floor((Math.random() * 12) + 1);
        console.log(crystal2);
        $("#score").text(crystal2);


    });
    $('#img3').click(function() {
        crystal3 = Math.floor((Math.random() * 12) + 1);
        console.log(crystal3);
        $("#score").text(crystal3);


    });
    $('#img4').click(function() {
        crystal4 = Math.floor((Math.random() * 12) + 1);
        console.log(crystal4);
        $("#score").text(crystal4);


    });

    function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    $('#win')
    if (random === score);
    $('win').text(wins++);

    $('#loss')
    if (random > score);
    $('#loss').text(losses++);




});