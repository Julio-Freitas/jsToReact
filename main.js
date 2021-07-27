import CardPlayer from "./src/components/CardPlayer";
import BoardGame from "./src/components/objects/BoardGame";

import "./style.css";
import "./src/styles/settings/colors.css";
import "./src/styles/generic/reset.css";
import "./src/styles/elements/base.css";

const app = document.querySelector("#app");

const $htmlCardGame = `<div>${CardPlayer(1)} ${BoardGame(6)}</div>`;

app.insertAdjacentHTML("beforeend", $htmlCardGame);
