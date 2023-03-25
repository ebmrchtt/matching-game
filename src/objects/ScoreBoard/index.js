import PlayerName from "../../components/PlayerName";
import "./style.css";

function ScoreBoard() {
    return /*html*/` 
        <header class="score-board">
            ${PlayerName("PLAYER 1")}
            ${PlayerName("PLAYER 2")}
        </header>
    `;
}

export default ScoreBoard;