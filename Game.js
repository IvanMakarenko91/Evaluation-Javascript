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