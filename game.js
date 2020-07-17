var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];
var started=false;
var level=0;
var index=0; 


$("button").click(function(){
    if(!started){
       $("#level-title").text("level "+level) ;
       nextSequence();
       
    }
    
});




$(".btn").click(function () {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playAudio(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);

});
function checkAnswer(currentLevel){
    
    
    if(userClickedPattern[currentLevel]===gamePattern[currentLevel])
      {  console.log("success");
       
       if(userClickedPattern.length===gamePattern.length){
           setTimeout(function(){
               nextSequence();
           },1000);
        }
      }
       else{
           var over="wrong";
           playAudio(over);
             $("#level-title").text("Game over,click here to restart game") ;
           $("body").addClass("game-over");
           setTimeout(function () {
        $("body").removeClass("game-over");
    }, 200);
          $("#level-title").click(function () {startOver();})
           
           
           
       }
    
}
function startOver(){
           window.location.reload();

}




function nextSequence() {
     userClickedPattern = [];
     started=true;
    level++;
     $("#level-title").text("level "+level) ;
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    
    animatePress(randomChosenColour);
//    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
      playAudio(randomChosenColour);

}

function playAudio(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour) {


    $("#" + currentColour).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}
