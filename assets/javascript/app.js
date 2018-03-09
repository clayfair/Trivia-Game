
window.onload = function () {
    $("#questionOne, #timeRemaining").hide();
 
    
    
    
    
    
    
    
    
    $("#start").click(function () {
        //on click...
        //I want to hide the button
        $("#start").hide();
        //show the questions
        $("#questionOne, #timeRemaining").show();
        //display a 30 second timer...
        //starting at 30
        var count = 7;
        //we want to append the descending count every second 
        var myVar = setInterval(appendCount, 1000);

        function appendCount() {
            if (count > 0) {
                count--
                $("#timeRemaining").text("Time Remaining: " + count);
            } else {
                stop();
            }
        }

        // function correctAnswer() {
        //     $("#start").click(function () {
        // }











    });

 
}
