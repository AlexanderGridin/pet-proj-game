import { GameScene } from "../../core/game-scene";

export class IntroScene extends GameScene {
  constructor() {
    // * "intro-scene" is a unique scene key
    super("intro-scene");
  }

  // * hook, that get called at appropriate time by Phaser
  public preload() {}

  // * hook, that get called at appropriate time by Phaser
  // * create() is called once all the assets for the Scene have been loaded
  public create() {}
}
