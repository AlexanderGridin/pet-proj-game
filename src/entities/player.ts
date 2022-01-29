import { GameScene } from "../core/game-scene";
import { Keyboard } from "../controls/keyboard";

export class Player {
  private player!: Phaser.Types.Physics.Arcade.ImageWithDynamicBody;
  private velocity: number = 100;

  constructor(
    private readonly scene: GameScene,
    private readonly keyboard: Keyboard
  ) {}

  public preload(): void {
    this.scene.load.image("player", "assets/pointer.png");
  }

  public create(): void {
    this.player = this.scene.physics.add.image(
      this.scene.scale.width / 2,
      this.scene.scale.height / 2,
      "player"
    );
  }

  public update(): void {
    this.handleKeyboardKeys();
  }

  private handleKeyboardKeys(): void {
    if (this.keyboard.keys.W.isDown) {
      this.player.setVelocityY(-this.velocity);
      return;
    }

    if (this.keyboard.keys.S.isDown) {
      this.player.setVelocityY(this.velocity);
      return;
    }

    if (this.keyboard.keys.A.isDown) {
      this.player.setVelocityX(-this.velocity);
      return;
    }

    if (this.keyboard.keys.D.isDown) {
      this.player.setVelocityX(this.velocity);
      return;
    }

    this.player.setVelocityY(0);
    this.player.setVelocityX(0);
  }
}
