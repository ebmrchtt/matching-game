import PlayerName from "../../components/PlayerName";
import VsPlayer from "../../components/VsPlayer";
import "./style.css";

function ScoreBoard() {
    return /*html*/` 
        <header class="score-board">
            ${PlayerName("PLAYER 1")}
            ${VsPlayer()}
            ${PlayerName("PLAYER 2")}
        </header>
    `;
}

export default ScoreBoard;