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