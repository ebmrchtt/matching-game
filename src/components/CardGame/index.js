import "./style.css";

function CardGame(icon = "react-logo", alt = "Logo do React") {
    return /*html*/`
        <article class="card-game">
            <img src="images/${icon}.svg" alt="${alt}">
        </article>
    `;
}

export default CardGame;