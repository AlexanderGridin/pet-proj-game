import { ArcadeGameObjectWithBody, GameScene } from "../../core/type-aliases";
import { Keyboard } from "../../controls/keyboard";
import { Player } from "../../entities/player";
import {
  InitHook,
  PreloadHook,
  CreateHook,
  UpdateHook,
} from "../../core/hooks";
import { Apples } from "../../entities/apples";
import { Text } from "../../core/type-aliases";
import { IS_DEBUG_MODE } from "../../core/game-config";

export class IntroScene
  extends GameScene
  implements InitHook, PreloadHook, CreateHook, UpdateHook
{
  private width!: number;
  private height!: number;

  private readonly keyboard: Keyboard = new Keyboard(this);
  private readonly player: Player = new Player(this, this.keyboard);
  private apples: Apples = new Apples(this);

  private applesCounter = 0;
  private applesCollected!: Text;

  constructor() {
    super("intro-scene"); // * "intro-scene" is a unique scene key
  }

  public init(): void {
    this.apples.init();
  }

  // * hook, that get called at appropriate time by Phaser
  // * preload() is called to allow us to specify images, audio, or other assets to load before starting the Scene.
  public preload(): void {
    this.preloadAssets();

    this.keyboard.preload();

    this.player.preload();
    this.apples.preload();
  }

  // * hook, that get called at appropriate time by Phaser
  // * create() is called once all the assets for the Scene have been loaded
  public create(): void {
    this.width = this.scale.width;
    this.height = this.scale.height;

    this.putAssetsIntoScene();

    this.apples.create(10);
    this.player.create();

    this.createOverlaps();

    this.applesCollected = this.add.text(10, 10, this.coinsText, {
      color: "white",
      fontSize: "24px",
      fontFamily: "Arial",
      backgroundColor: "#186e3c",
      padding: {
        x: 10,
        y: 10,
      },
    });
  }

  // * hook, that get called at appropriate time by Phaser
  public update(): void {
    this.player.update();
  }

  private createOverlaps(): void {
    this.physics.add.overlap(
      this.player.player,
      this.apples.group,
      this.handleCollect,
      undefined,
      this
    );
  }

  private handleCollect(
    player: ArcadeGameObjectWithBody,
    apple: ArcadeGameObjectWithBody
  ): void {
    this.apples.group.killAndHide(apple);
    this.physics.world.disableBody(apple.body);

    this.applesCounter++;

    this.applesCollected.text = this.coinsText;

    if (this.applesCounter % 10 === 0) {
      this.scene.restart();
    }
  }

  private preloadAssets(): void {
    this.load.image("dirt", "assets/grass_top.png");
  }

  private putAssetsIntoScene(): void {
    this.add.tileSprite(0, 0, this.width, this.height, "dirt").setOrigin(0);

    IS_DEBUG_MODE &&
      this.add
        .grid(0, 0, this.width, this.height, 64, 64, 100, 0.3)
        .setOrigin(0);
  }

  private get coinsText(): string {
    return `Apples collected: ${this.applesCounter}`;
  }
}
