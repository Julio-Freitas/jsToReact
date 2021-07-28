import "./style.css";
const PlayerName = (player) => {
  return /* html */ `
    <div class="card-player">
      <span class="player">Player ${player} </span>
    </div>
  `;
};

export default PlayerName;
