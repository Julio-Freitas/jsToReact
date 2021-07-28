import "./style.css";

const CardGame = (icon = "alura-pixel", alt = "alura") => {
  return /* html */ `
    <article class="card-game">
     <img src="../images/${icon}.png" atl=${alt} title="img ${alt}" />
    </article>
  `;
};

export default CardGame;
