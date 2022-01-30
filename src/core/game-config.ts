import { GameConfig } from "./type-aliases";
import { IntroScene } from "../scenes/intro-scene/intro-scene";

export const GAME_CONFIG: GameConfig = {
  type: Phaser.AUTO,
  width: 640,
  height: 640,
  scene: [IntroScene],
  physics: {
    default: "arcade",
  },
};
