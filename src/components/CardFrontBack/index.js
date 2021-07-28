import CardGame from "../CardGame";
import "./style.css";

window.cardFrontBack = {};
window.cardFrontBack._handleClick = ({ target }) => {
  const $cardFrontBack = event.target.closest(".card-front-back ");
  $cardFrontBack.classList.toggle("active");
};

export default function CardFrontBack() {
  return /*html */ `
    <div class="card-front-back " onclick="cardFrontBack._handleClick(event)">
      <div class="card-fliper">
        <div class="card-front">
            ${CardGame()}
          </div>
          <div class="card-back">
            ${CardGame("css", "css")}
          </div>
        </div>
      </div>
  `;
}
