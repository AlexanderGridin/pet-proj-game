import { GameConfig } from "./type-aliases";
import { IntroScene } from "../scenes/intro-scene/intro-scene";

export const IS_DEBUG_MODE = true;

export const GAME_CONFIG: GameConfig = {
  type: Phaser.AUTO,
  width: 640,
  height: 640,
  scene: [IntroScene],
  physics: {
    default: "arcade",
    arcade: {
      // gravity: {
      //   y: 200,
      // },
      debug: IS_DEBUG_MODE,
    },
  },
};
