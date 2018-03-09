
window.onload = function () {
    $("#questions").hide();
    $("#start").click(function () {
        //on click...
        //I want to hide the button
        $("#start").hide();
        //show the questions
        $("#questions").show();
        //display a 30 second timer. That entails... 
        //starting at 30
        var count = 30;
        //counting down by 1

        //display count
        //access the div containing text "Time Remaining: " and append the count 
        // $("#timeRemaining").append(count);
        //end at 0
        //we want to append the count every second 
        var myVar = setInterval(appendCount, 1000);

        function appendCount() {
            count--
            $("#timeRemaining").text(count);
        }









    });
}

