const TEAM_ONE_SCORE = 0;
const TEAM_TWO_SCORE = 1;
const WIN = 3;
const TIE = 1;

function points(games) {
    let totalPoints = 0;
    for( const game of games ){
        const pointsOfGame = game.split(":");
        if(pointsOfGame[TEAM_ONE_SCORE] > pointsOfGame[TEAM_TWO_SCORE]){ 
            totalPoints += WIN;
        }else if(pointsOfGame[TEAM_ONE_SCORE] == pointsOfGame[TEAM_TWO_SCORE]){
            totalPoints += TIE;
        }
    }
    return totalPoints;
}

// O(n)

const points = (games) => {
    let totalPoints = 0;
    for( const game of games ){
        const pointsOfGame = game.split(":");
   
        pointsOfGame[TEAM_ONE_SCORE] > pointsOfGame[TEAM_TWO_SCORE] 
        ? totalPoints += WIN
        : pointsOfGame[TEAM_ONE_SCORE] == pointsOfGame[TEAM_TWO_SCORE]
        ? totalPoints += TIE
        : totalPoints;
    }
    return totalPoints;
}

// O(n)