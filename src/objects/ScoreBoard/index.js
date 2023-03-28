import PlayerName from "../../components/PlayerName";
import PlayerScore from "../../components/PlayerScore";
import VsPlayer from "../../components/VsPlayer";
import "./style.css";

function ScoreBoard() {
    return /*html*/` 
        <header class="score-board">
            ${PlayerName("PLAYER 1")}
            ${PlayerScore(2)}
            ${VsPlayer()}
            ${PlayerScore(1)}
            ${PlayerName("PLAYER 2")}
        </header>
    `;
}

export default ScoreBoard;