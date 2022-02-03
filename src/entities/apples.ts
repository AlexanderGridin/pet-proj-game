import { ArcadeSprite, GameScene } from "../core/type-aliases";
import { CreateHook, InitHook, PreloadHook } from "../core/hooks";
import { StaticGroup } from "../core/type-aliases";

export class Apples implements InitHook, PreloadHook {
  public group!: StaticGroup;

  constructor(private readonly scene: GameScene) {}

  public init(): void {
    this.group = this.scene.physics.add.staticGroup();
  }

  public preload(): void {
    this.scene.load.image("coin", "assets/apple.png");
  }

  public create(numberOfItems: number): void {
    for (let i = 0; i < numberOfItems; i++) {
      const posX: number = Phaser.Math.Between(
        100,
        this.scene.scale.width - 100
      );
      const posY: number = Phaser.Math.Between(
        100,
        this.scene.scale.height - 100
      );

      const apple: ArcadeSprite = this.group.create(posX, posY, "coin");

      apple.scale = 0.4;
      apple.body.updateFromGameObject();
    }
  }
}
