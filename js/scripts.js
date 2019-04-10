//Business end

//Globals
var rollDice = 0;
var total = 0;
var scorePlayer1 = 0;
var scorePlayer2 = 0;
//Rolling the dice
function Roll(){
  rollDice = Math.floor((Math.random() * 6) + 1);
}
function Total(){
    if(rollDice === 1){
      total = 0;
      alert("Oh no! You rolled a 1. Your turn is over. And you are awarded no points.")
    } else {
      total += rollDice;
    }    
  return total;
}
//Front/User end
$(document).ready(function() {
  $("#rollDice").click(function(event) {
    event.preventDefault();
    Roll();
    $("#rollOutput").html(rollDice);
    $("#turnTotal").html(Total());
    
  });
//Player 1
  $("#player1").click(function(event){
    scorePlayer1 += total;
    $("#score1").html(scorePlayer1);
    total = 0;
    rollDice = 0;
    $("#rollOutput").html(total);
    $("#turnTotal").html(rollDice);
  });
  $("#player2").click(function(event) {
    scorePlayer2 += total;
    $("#score2").html(scorePlayer2);
    total = 0;
    rollDice = 0;
    $("#rollOutput").html(total);
    $("#turnTotal").html(total);
  })

});