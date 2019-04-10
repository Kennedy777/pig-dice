//Business end
function RollScore() {
var rollArray = [];
var roll = Math.floor((Math.random() * 6) + 1);
  rollArray.push(roll);
}
    
    
//Front/User end
$(document).ready(function() {
  $("#rollDice").click(function(event) {
    roll();
  }
    event.preventDefault();
    var  = parseInt($("#add1").val());
    var result = add(number1, number2);
    $("#rollOutput").text(result);
})
});