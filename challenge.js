// Good Luck! You got this 💪🏾
// Write your code here.
function playgame(player1, player2){
if (player1==player2) 
   return "Tie"
} 
 if (player1 == "rock" && player2 == "scissors"|| 
player1 == "paper" && player2 == "rock") 
{
   return "player1 wins"
} 
else {
   return "player2 wins"
}

console.log (playgame("rock","paper"))