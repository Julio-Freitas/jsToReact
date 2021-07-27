import "./style.css";
const _handleClickFront = (event) => {
  console.log(event);
};
const CardGame = () => {
  return `
    <article class="card-game">
    <div class="card-fliper">
      <div class="card-front">
       <img src="../images/alura-pixel.png" atl="alura" title="img alura" />
      </div >
       <div class="card-back">
         COSTAS
      </div>

    </div>
       
    </article>
  `;
};

export default CardGame;
