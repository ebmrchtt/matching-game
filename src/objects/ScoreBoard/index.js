import PlayerName from "../../components/PlayerName";
import PlayerScore from "../../components/PlayerScore";
import VsPlayer from "../../components/VsPlayer";
import "./style.css";

function ScoreBoard() {
    return /*html*/` 
        <header class="score-board">
            ${PlayerName("PLAYER 1")}
            ${PlayerScore(1)}
            ${VsPlayer()}
            ${PlayerScore()}
            ${PlayerName("PLAYER 2")}
        </header>
    `;
}

export default ScoreBoard;