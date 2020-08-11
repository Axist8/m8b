$(document).ready(function(){
    var m8b = {};
    m8b.answers = ["Yes.", "No.", "Maybe.", "Perhaps", "Try again…", "Ponder it.", "It is certain.", "It's hazy..", "Don't count on it.", "It's likely.", "Unlikely.", "Wrong question.", "Believe.", "Just dance.", "Laugh it off."];
    m8b.askQ = function(question) {
        $("#answer").fadeIn(4000);
        var ranNum = Math.random();
        var ranNumArr = ranNum * this.answers.length;
        var ranInd = Math.floor(ranNumArr);
        var ranAns = this.answers[ranInd];
        $("#answer").text(ranAns);
        $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");
        console.log(question)
        console.log(ranAns)
    }
    $("#answer").hide();
    var onClick = function() {
        $("#answer").hide();
        $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
        setTimeout(
            function(){
                var question = prompt("ASK A YES/NO QUESTION!");
                 m8b.askQ(question);
            }, 
        500);
        $("#8ball").effect("shake");
    };
         
    $("#questionButton").click( onClick );
});