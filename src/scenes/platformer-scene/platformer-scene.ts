import {
  InitHook,
  PreloadHook,
  CreateHook,
  UpdateHook,
} from "../../core/hooks";
import { GameScene } from "../../core/type-aliases";
import { Keyboard } from "../../controls/keyboard";
import { PlatformerMap } from "./platformer-map";
import { PlatformerPlayer } from "./platformer-player";

const SCENE_KEY = "platformer";

export class PlatformerScene
  extends GameScene
  implements InitHook, PreloadHook, CreateHook, UpdateHook
{
  private readonly keyboard: Keyboard = new Keyboard(this);
  private readonly gameMap: PlatformerMap = new PlatformerMap({ scene: this });
  private readonly player: PlatformerPlayer = new PlatformerPlayer({
    scene: this,
    keyboard: this.keyboard,
  });

  constructor() {
    super(SCENE_KEY);
  }

  public init(): void {}

  public preload(): void {
    this.keyboard.preload();
    this.gameMap.preload();
    this.player.preload();
  }

  public create(): void {
    this.matter.world.setBounds();
    this.gameMap.create();
    this.player.create();
  }

  public update(): void {
    this.player.update();
  }
}
