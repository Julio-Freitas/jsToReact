import CardGame from "../../../components/CardGame";
import "./style.css";
function BoardGame(amoutCard) {
  const $htmlCardGame = CardGame();
  const $htmlContent = $htmlCardGame.repeat(amoutCard);
  return `
    <section class="board-game">
    ${$htmlContent}
    </section>
  `;
}

export default BoardGame;
