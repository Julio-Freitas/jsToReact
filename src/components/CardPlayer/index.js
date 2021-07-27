import "./style.css";
const CardPlayer = (player) => {
  return `
    <div class="card-player">
    <span>Player ${player} </span>
      <div class="card-divison-grid">
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
      </div>
    </div>
  `;
};

export default CardPlayer;
