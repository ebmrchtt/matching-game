import "./style.css";

function ArrowPlayer(currentPlayer = 1) {
    return /*html*/`
        <img class="arrow-player" data-currentPlayer="${currentPlayer}" src="images/arrow-player.svg" alt="Ícone de uma seta para baixo">
    `;
}

export default ArrowPlayer;