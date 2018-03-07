
window.onload = function () {
    $("#questions").hide();
    $("#start").click(function () {
        //on click...
        //I want to hide the button
        $("#start").hide();
        //show the questions
        $("#questions").show();
        //start a 30 second timer
        var secondsLeft = 10;
        var clock = setInterval(function () {
            secondsLeft--
            if (secondsLeft < 0) {
                clearInterval(clock);
            } else {
                $("timeRemaining").append(secondsLeft.toString());
            }

        }, 1000)






    });
}

