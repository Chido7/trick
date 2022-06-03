//for first die
var randomNumber1 = Math.random();
randomNumber1 = Math.floor(Math.random()*6)+ 1;
var randomDiceImage = "images/dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage); //for dice randomno change

// for the seecond die
var randomNumber2 = Math.random();
randomNumber2 = Math.floor(Math.random()*6)+ 1;
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

//conditional
if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = " 🚩 Player 1 wins";
}else if (randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML = "Player 2 wins 🚩";
}else {
  document.querySelector("h1").innerHTML = "Draw!";
}
