import "phaser";

import { GameScene } from "./scenes/gameScene";

const config: Phaser.Types.Core.GameConfig = {
  title: "Maerun",
  width: 800,
  height: 600,
  parent: "game",
  scene: [GameScene],
  backgroundColor: "#000033"
};
