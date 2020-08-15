function rollDice() {

    let roll1 = Math.floor((Math.random() * 6) + 1);
    let roll2 = Math.floor((Math.random() * 6) + 1);
    
    let randomImage = "images/dice" + roll1 + ".png";
    let randomImage2 = "images/dice" + roll2 + ".png";

    let die2 = document.getElementById("die2");
    die2.setAttribute("src", randomImage);
    let die1 = document.getElementById("die1");
    die1.setAttribute("src", randomImage2);

    if (roll1 > roll2) {
      document.getElementById("diceGameHeader").innerHTML = "Player 1 Wins!"
    } else if (roll1 < roll2){
      document.getElementById("diceGameHeader").innerHTML = "Player 2 Wins!"
    } else {
      document.getElementById("diceGameHeader").innerHTML = "Tie."
    }
    
    /*if (roll1 === 1) {
      document.getElementById("die1").src="images/dice1.png"
    } else if (roll1 === 2) {
      document.getElementById("die1").src="images/dice2.png"
    } else if (roll1 === 3) {
      document.getElementById("die1").src="images/dice3.png"
    } else if (roll1 === 4) {
      document.getElementById("die1").src="images/dice4.png"
    } else if (roll1 === 5) {
      document.getElementById("die1").src="images/dice5.png"
    } else {
      document.getElementById("die1").src="images/dice6.png"
    }
  
    if (roll2 === 1) {
      document.getElementById("die2").src="images/dice1.png"
    } else if (roll2 === 2) {
      document.getElementById("die2").src="images/dice2.png"
    } else if (roll2 === 3) {
      document.getElementById("die2").src="images/dice3.png"
    } else if (roll2 === 4) {
      document.getElementById("die2").src="images/dice4.png"
    } else if (roll2 === 5) {
      document.getElementById("die2").src="images/dice5.png"
    } else {
      document.getElementById("die2").src="images/dice6.png"
    }*/

}




