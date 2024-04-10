var gamePattern=  [];
var buttonColors = ["red","blue","green","yellow"];
var userClickedPattern = [];
var started = false;

level = 0;

$(document).keypress(function(){
    if(!started){
        $("#level-title").text("level = "+level)
        nextSequence();
        started = true;
    }
})

$(".btn").click(function(){
    var user_chosen_color = $(this).attr("id");
    
    userClickedPattern.push(user_chosen_color);
    console.log(userClickedPattern);
    animatePress(user_chosen_color);
    playSound(user_chosen_color);
    checkAnswer(userClickedPattern.length-1);
})

function nextSequence(){
    userClickedPattern = [];
    level++;
    $("#level-title").text("level = "+level)
    var rand_no = Math.floor(Math.random()*4);
    
    var rand_chosen_color = buttonColors[rand_no]
    
    gamePattern.push(rand_chosen_color);

    $("#"+rand_chosen_color).on("click",function(){
        $("#"+rand_chosen_color).fadeOut(200)
        $("#"+rand_chosen_color).fadeIn(100)

    })

    playSound(rand_chosen_color);

}

function checkAnswer(currentLevel){

}
function playSound(name){
    var sound = new Audio('/sounds/'+name+'.mp3');
    sound.play();

}

function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed");
    },100);
}

nextSequence();
console.log(gamePattern);


