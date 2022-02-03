import { GameScene } from "../core/type-aliases";
import { Keyboard } from "../controls/keyboard";
import { CreateHook, PreloadHook, UpdateHook } from "../core/hooks";

export class Player implements PreloadHook, CreateHook, UpdateHook {
  public player!: Phaser.Types.Physics.Arcade.ImageWithDynamicBody;
  private velocity: number = 200;

  constructor(
    private readonly scene: GameScene,
    private readonly keyboard: Keyboard
  ) {}

  public preload(): void {
    this.scene.load.image("player", "assets/player.jpg");
  }

  public create(): void {
    this.player = this.scene.physics.add
      .image(this.scene.scale.width / 2, this.scene.scale.height / 2, "player")
      .setScale(0.5)
      .setCollideWorldBounds(true);
  }

  public update(): void {
    this.handleKeyboardKeys();
  }

  private handleKeyboardKeys(): void {
    if (this.keyboard.keys.W.isDown) {
      this.player.setVelocityX(0);
      this.player.setVelocityY(-this.velocity);
      return;
    }

    if (this.keyboard.keys.S.isDown) {
      this.player.setVelocityX(0);
      this.player.setVelocityY(this.velocity);
      return;
    }

    if (this.keyboard.keys.A.isDown) {
      this.player.setVelocityY(0);
      this.player.setVelocityX(-this.velocity);
      return;
    }

    if (this.keyboard.keys.D.isDown) {
      this.player.setVelocityY(0);
      this.player.setVelocityX(this.velocity);
      return;
    }

    this.player.setVelocityY(0);
    this.player.setVelocityX(0);
  }
}
