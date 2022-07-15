import { GameConfig } from "./type-aliases";
import { PlatformerScene } from "../scenes/platformer-scene/platformer-scene";

export const IS_DEBUG_MODE = true;

export const GAME_CONFIG: GameConfig = {
  type: Phaser.AUTO,
  width: 640,
  height: 640,
  scene: [PlatformerScene],
  physics: {
    default: "matter",
    matter: {
      debug: IS_DEBUG_MODE,
    },
  },
};
