import BoardGame from "./src/components/objects/BoardGame";
import ScoreBoard from "./src/components/objects/scoreBoard";

import "./src/styles/settings/colors.css";
import "./src/styles/generic/reset.css";
import "./src/styles/elements/base.css";

const app = document.querySelector("#app");

const $htmlCardGame = `<div> ${ScoreBoard()}${BoardGame(6)}</div>`;

app.insertAdjacentHTML("beforeend", $htmlCardGame);
