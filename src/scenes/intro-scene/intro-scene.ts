import { GameScene } from "../../core/game-scene";
import { Player } from "../../entities/player";
import { Keyboard } from "../../controls/keyboard";

export class IntroScene extends GameScene {
  private width!: number;
  private height!: number;

  private readonly keyboard: Keyboard = new Keyboard(this);
  private readonly player: Player = new Player(this, this.keyboard);

  constructor() {
    super("intro-scene"); // * "intro-scene" is a unique scene key
  }

  // * hook, that get called at appropriate time by Phaser
  // * preload() is called to allow us to specify images, audio, or other assets to load before starting the Scene.
  public preload(): void {
    this.preloadAssets();

    this.keyboard.preload();
    this.player.preload();
  }

  // * hook, that get called at appropriate time by Phaser
  // * create() is called once all the assets for the Scene have been loaded
  public create(): void {
    this.width = this.scale.width;
    this.height = this.scale.height;

    this.putAssetsIntoScene();
    this.player.create();
  }

  // * hook, that get called at appropriate time by Phaser
  public update(): void {
    this.player.update();
  }

  private preloadAssets(): void {
    this.load.image("bg", "assets/barrel_bottom.png");
  }

  private putAssetsIntoScene(): void {
    this.add.tileSprite(0, 0, this.width, this.height, "bg").setOrigin(0);
  }
}
