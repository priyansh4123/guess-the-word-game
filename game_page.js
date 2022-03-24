player1_name=localStorage.getItem("player1name");
player2_name=localStorage.getItem("player2name");
player1_score=0;
player2_score=0;
document.getElementById("player1_name").innerHTML=player1_name +":";
document.getElementById("player2_name").innerHTML=player2_name +":";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="Question Turn - "+player1_name;
document.getElementById("player_answer").innerHTML="Answer Turn - "+player2_name;
function send(){
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();
    console.log(word);
    charat1=word.charAt(1);
    console.log(charat1);
    lengh_div_2=Math.floor(word.length/2);
    charat2=word.charAt(lengh_div_2);
    console.log(charat2);
    length_min_1=word.length-1;
    charat3=word.charAt(length_min_1);
    console.log(charat3);
    remove_chatat1=word.replace(charat1,"_");
    remove_chatat2=remove_chatat1.replace(charat2,"_");
    remove_chatat3=remove_chatat2.replace(charat3,"_");
    console.log(remove_chatat3);
    qution_word="<h4 id='word_display'>Q. "+remove_chatat3+"</h4>";
    input_box="<br>answer : <input type='text' id='input_check_box'>";
    check_button="<br><br> <button class='btn btn-info' onclick='check()'>Check</button>";
    row=qution_word+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value=" ";
}
question_turn="player1";
answer_turn="player2";
function check(){
getanswer=document.getElementById("input_check_box").value;
answer=getanswer.toLowerCase();
console.log("Answer in lower case="+answer);
if(answer == word) 
{ if(answer_turn == "player1") 
{ player1_score = player1_score +1;
 document.getElementById("player1_score").innerHTML = player1_score; } 
 else 
 { player2_score = player2_score +1;
 document.getElementById("player2_score").innerHTML = player2_score; }
 }
if (question_turn == "player1"){
    question_turn="player2"
    document.getElementById("player_question").innerHTML="question turn - "+player2_name;
}
else{
    question_turn="player1"
    document.getElementById("player_question").innerHTML="question turn -"+player1_name;
}
if (answer_turn == "player1"){
    answer_turn="player2"
    document.getElementById("player_answer").innerHTML="answer turn -"+player2_name;
}
else{
    answer_turn="player1";
    document.getElementById("player_answer").innerHTML="answer turn -"+player1_name;
}
document.getElementById("output").innerHTML=" ";
}