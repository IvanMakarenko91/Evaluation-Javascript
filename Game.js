// attribution des couleurs
const ACTIVE_PLAYER_NAME_COLOR = "green";
const INACTIVE_PLAYER_NAME_COLOR = "black";
const CURRENT_SCORE_PREFIX = "Score : ";
const TOTAL_SCORE_PREFIX = "Total : ";

// Création de la classe pour y inserer le score, le nom et le message.
class Player {
  totalScore = 0;
  displayName = "inconnu";
  constructor( nom ){
    this.displayName = nom;
  }
}

let currentScore = 0;

// Création d'objets aux classes.
let playerOne = new Player( "Player One" );
let playerTwo = new Player( "Player Two" );

// DOM recuperation des elements (sélécteurs).
const jetede = document.getElementById('rolldice'); // Lance le dé quand on clic sur rolldice
const sauvegarder = document.getElementById('sauvegarder'); // Boutton HOLD
const newGame = document.getElementById('newGame'); // Boutton New Game
const result = document.getElementById('resultat'); // Score affiché

playerOne.name = document.getElementById('playerOneName');
playerTwo.name = document.getElementById('playerTwoName');
playerOne.name.style.color = ACTIVE_PLAYER_NAME_COLOR;
playerTwo.name.style.color = INACTIVE_PLAYER_NAME_COLOR;
playerOne.name.innerHTML = playerOne.displayName;
playerTwo.name.innerHTML = playerTwo.displayName;

playerOne.message = document.getElementById('playerOneMessage'); 
playerTwo.message = document.getElementById('playerTwoMessage');
playerOne.score = document.getElementById('playerOneScore');
playerTwo.score = document.getElementById('playerTwoScore');

let activePlayer = playerOne;

let currentPlayer = 1;

// Fonction generant un chiffre aléatoire entre 1et 6
const chiffreAleatoire = function() {
  // Crée un chiffre aleatoire compris entre 1 et 6.
  const aleatoire = (Math.random() * 6) +1
  // La fonction Math.trunc() retourne la troncature entière d'un nombre en retirant sa partie décimale.
  const resultat = Math.trunc(aleatoire)
  return resultat
}

// Fonction switch permettant de passer du joueur 1 au joueur 2 avec la bonne couleur afficher.
const switchActivePlayer = function() {
  activePlayer.name.style.color = INACTIVE_PLAYER_NAME_COLOR;
  currentScore = 0;
  activePlayer.message.innerHTML = CURRENT_SCORE_PREFIX + "0";
  activePlayer = activePlayer == playerOne ? playerTwo : playerOne; // Condition permettant de passer du joueur 1 à 2
  activePlayer.message.innerHTML = CURRENT_SCORE_PREFIX + "0";
  activePlayer.name.style.color = ACTIVE_PLAYER_NAME_COLOR;
}

// Fonction faisant apparaitre la face du dé correspondant au chiffre aleatoire.
const hasard = function() {
  random = chiffreAleatoire();
  document.getElementById('imgage').setAttribute("src","images/dice-" + random + ".png");
  if (random == 1) {
    switchActivePlayer(); // Fonction permettant de changer de joueur.
    activePlayer.message.innerHTML = "A mon tour !";
  }
  else {
    currentScore += random;
    activePlayer.message.innerHTML = CURRENT_SCORE_PREFIX + currentScore;
  }
}

const hasard2 = function() {
  random = chiffreAleatoire();
  document.getElementById('imgage').setAttribute("src","images/dice-" + random + ".png"); // Image affiché en fonction du nombre aléatoire
  if (random == 1) { // Si le chiffre aleatoire tombe sur 1, on change de joueur.
    currentScore = 0;
    if( currentPlayer == 1 ){
      playerTwo.message.innerHTML = "A mon tour !";
      playerOne.message.innerHTML = CURRENT_SCORE_PREFIX + 0;
      playerTwo.name.style.color = ACTIVE_PLAYER_NAME_COLOR;
      playerOne.name.style.color = INACTIVE_PLAYER_NAME_COLOR;
      currentPlayer = 2;
    }
    else{
      playerOne.message.innerHTML = "A mon tour !";
      playerTwo.message.innerHTML = CURRENT_SCORE_PREFIX + 0;
      currentPlayer = 1;
      playerOne.name.style.color = ACTIVE_PLAYER_NAME_COLOR;
      playerTwo.name.style.color = INACTIVE_PLAYER_NAME_COLOR;
    }
  }
  else { // Si le chiffre generé est different de 1, on accumule le score.
    currentScore += random;
    if( currentPlayer == 1 ){
      playerOne.message.innerHTML = CURRENT_SCORE_PREFIX + currentScore;
    }
    else{
      playerTwo.message.innerHTML = CURRENT_SCORE_PREFIX + currentScore;
    }
  }
}

// à chaque click sur le bouton "rolldice", la fontion hasard s'executera.
jetede.addEventListener('click',hasard2)

//  JQuery utilisé pour l'evenement de "click" sur le boutton 'hold' afin de sauvegarder le score.
$(document).ready(function(){

  $('#sauvegarder').click(function(){
    activePlayer.totalScore += currentScore; 
    activePlayer.score.innerText = TOTAL_SCORE_PREFIX + activePlayer.totalScore;
    if (activePlayer.totalScore >= 100) {
      result.innerHTML = activePlayer.displayName + " Win !"
    }
    switchActivePlayer();
    
  })
})

// Fonction permettant de remettre à 0 le score.
const resetAll = function(){
  playerOne.totalScore = 0; 
  playerTwo.totalScore = 0; 
  playerOne.score.innerText = TOTAL_SCORE_PREFIX + 0;
  playerTwo.score.innerText = TOTAL_SCORE_PREFIX + 0;
  activePlayer = playerTwo;
  switchActivePlayer();
}
// à chaque click sur le bouton "new Game", la partie sera recommencer à 0.
newGame.addEventListener('click',resetAll)

resetAll();