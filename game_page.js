player1_name = localStorage.getItem("player_1");
player2_name = localStorage.getItem("player_2");

player1_score = 0;
player2_score = 0;

document.getElementById("player_1").innerHTML = player1_name + ":";
document.getElementById("player_2").innerHTML = player2_name + ":";

document.getElementById("player_1score").innerHTML = player1_score;
document.getElementById("player_2score").innerHTML = player2_score;

document.getElementById("question_turn").innerHTML = "Question Turn is : " + player1_name;
document.getElementById("answer_turn").innerHTML = "Answer Turn is : " + player2_name;