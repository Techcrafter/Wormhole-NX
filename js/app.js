import Wormhole from "./wormhole";

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("wormhole");
  const ctx = canvas.getContext("2d");
  ctx.scale(1.2, 1.2);

  let game = new Wormhole(ctx);
  game.renderPreview();

  const scoreboardContainer = document.getElementById("scoreboard-container");
  const scoreboard = document.getElementById("scoreboard");
  const startMenu = document.getElementById("start-menu");
  const playAgain = document.getElementById("play-again");
  const startGame = document.getElementById("start-game");
  
  playAgain.addEventListener("click", () => {
    scoreboardContainer.className = "scoreboard-container";
    scoreboard.className = "scoreboard";
    playGame();
  });

  startGame.addEventListener("click", () => {
    scoreboardContainer.className = "scoreboard-container";
    startMenu.setAttribute("style", "visibility: hidden;");
    playGame();
  });

  const playGame = () => {
    if(document.documentElement.requestFullscreen)  // switch page to fullscreen
    {
      document.documentElement.requestFullscreen();
    }
    else if(document.documentElement.webkitRequestFullscreen)
    {
      document.documentElement.webkitRequestFullscreen();
    }
    else if(document.documentElement.msRequestFullscreen)
    {
      document.documentElement.msRequestFullscreen();
    }
    
    game = new Wormhole(ctx);

    game.play();
    game.setupDone = true;
  };
});
