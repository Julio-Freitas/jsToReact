import "./style.css";
import PlayerName from "../../PlayerName";

export default function ScoreBoard() {
  return /* html */ `  
  <header class="score-board">    
     <div class="score-board__container">
      ${PlayerName(1)} 
        <div class="card-divison-grid">
          <div class="item"></div>
          <div class="item"></div>
          <div class="item"></div>
        </div>
      </div>
     <div class="score-board__container">
      ${PlayerName(2)} 
        <div class="card-divison-grid">
          <div class="item"></div>
          <div class="item"></div>
          <div class="item"></div>
        </div>
      </div>
    </header>  
    `;
}
