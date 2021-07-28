import CardFrontBack from "../../CardFrontBack";

import "./style.css";
function BoardGame(amoutCard) {
  const $htmlCardFrontBack = CardFrontBack();
  const $htmlContent = $htmlCardFrontBack.repeat(amoutCard);
  return /* html */ `
    <section class="board-game">
    ${$htmlContent}
    </section>
  `;
}

export default BoardGame;
