
window.onload = function () {
    $("#timeRemaining").hide();
    $(".questionOne").hide();
    $(".answerOne").hide();
    //start button needs to 
    //A) hide the start button HTML
    //B) begin the 30 sec timer 
    //C) display the first question's HTML 
    $("#start").click(function () {
        $("#start").hide();
        timer();
        displayQuestionOne();
        revealAnswer();
    });
}

//---------------------------------TIMER CODE--------------------------------------------------

function timer() {
    $("#timeRemaining").show();


    var count = 7;
    var myVar = setInterval(appendCount, 1000);

    function appendCount() {
        if (count > 0) {
            count--
            $("#timeRemaining").text("Time Remaining: " + count);
        } else {
            stop();
        }
    }
}


//----------------------------------------QUESTION ONE-------------------------------------------

//onClick we run this (display the question)
function displayQuestionOne() {
    $(".questionOne").show();

}

//set in motion a timeout to reveal the answer
function revealAnswer() {
    //in 7 seconds...
    var newVar = setTimeout(questionOneAnswer, 1000 * 7);
    //I want to empty questionOne and replace it with
    function questionOneAnswer() {
        $(".questionOne").hide();
        $(".answerOne").show();
    }
}




  //we can display one question, set interval to match (30 seconds), at the end of 30 seconds display the answer, set interval for
    //5 seconds then display another question 