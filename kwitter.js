function addUser(){
    username = document.getElementById("user_name").ariaValueMax;
    localStorage.setItem("user_name", username);
    window.location = "kwitter_room.html";
}
question_turn = "player1";
answer_turn = "player2";


function check()
{
get_answer = document.getElementById("input_check_box").value;
if (get_answer == actual_answer)
   {
    if(answer_turn = "player1")
   {
     update_player1_score = player1_score +1;
     document.getElementById("player1score").innerHTML = update_player1_score;
    }
     else
    {    
     update_player2_score = player2_score +1;
     document.getElementById("player2_score").innerHTML = update_player2_score;
    }
    }
}
if(question_turn = "player1")
{
question_turn = "player2"
document.getElementById("player_question ") . innerHTML = "Question Turn -" + player2_name
}
else
{
question_turn = "playe r1"
document.getElementById ("player_question"). innerHTML = "Question Turn - " + player1_name;
}