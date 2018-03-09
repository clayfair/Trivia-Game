//COUNTER IS 7 INSTEAD OF 30 FOR TESTING PURPOSES (QUICKER)
var count = 7;

window.onload = function () {
    $("#timeRemaining").hide();
    $(".questionOne").hide();
    $(".answerOneTime").hide();
    $(".answerOneCorrectChoice").hide();
    $(".answerOneWrongChoice").hide();

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


    //ON CLICK 
    //right answer
    $(".correct").click(function () {
        $(".questionOne").hide();
        $(".answerOneCorrectChoice").show();
        count = -1;
        
    });

    //wrong answer
    $(".wrong").click(function () {
        $(".questionOne").hide();
        $(".answerOneWrongChoice").show();
        count = -1;
    });

}

//---------------------------------TIMER CODE--------------------------------------------------

function timer() {
    $("#timeRemaining").show();

    function myStopFunction() {
        clearInterval(myVar);
    }


    var myVar = setInterval(appendCount, 1000);

    function appendCount() {
        if (count > 0) {
            count--
            $("#timeRemaining").text("Time Remaining: " + count);
        } else {
            myStopFunction();
            revealAnswer();
        }
    }
}


//--------------------------------QUESTION ONE--------------------------------------------------

//onClick we run this (display the question)
function displayQuestionOne() {
    $(".questionOne").show();

}

//--------------------------------QUESTION ONE ANSWER -------------------------------------------

//-----------VIA TIME RUNNING OUT-----------
//set in motion a timeout to reveal the answer
function revealAnswer() {

    if(count === 0) {
        $(".questionOne").hide();
        $(".answerOneTime").show();
    }
}

//-----------NEXT QUESTION (*******IGNORE THIS NOT RELEVANT TO GRADER*********)-----------
  // function myStopFunction() {
    //     clearInterval(myNewVar);
    // }

    // if (count > 0) {
    //     //in 7 seconds...
    //     var newVar = setTimeout(questionOneAnswer, 1000 * 7);
    //     //I want to empty questionOne and replace it with
    //     function questionOneAnswer() {
    //         $(".questionOne").hide();
    //         $(".answerOneTime").show();
    //     }

    // } else {
    //     myStopFunction();
    //}


