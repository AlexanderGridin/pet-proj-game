import { GameConfig } from "./core/type-aliases";
import { IntroScene } from "./scenes/intro-scene/intro-scene";

export const GAME_CONFIG: GameConfig = {
  type: Phaser.AUTO,
  width: window.innerWidth,
  height: window.innerHeight,
  parent: "phaser-example",
  scene: [IntroScene],
  physics: {
    default: "arcade",
  },
};
