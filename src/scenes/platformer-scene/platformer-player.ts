import { Keyboard } from "../../controls/keyboard";
import { CreateHook, PreloadHook, UpdateHook } from "../../core/hooks";
import { GameScene, MatterImage } from "../../core/type-aliases";
import { AssetsLoader } from "../../core/utils/assets-loader";

interface PlayerProperties {
  scene: GameScene;
  keyboard: Keyboard;
}

enum PlayerKey {
  image = "player",
}

export class PlatformerPlayer implements PreloadHook, CreateHook, UpdateHook {
  private _keyboard!: Keyboard;
  private _scene!: GameScene;
  private _entity!: MatterImage;
  private _jumpsCounter = 0;
  private _maxJumpsBeforeCollideWithGround = 2;
  private _velocity = 5;

  constructor({ scene, keyboard }: PlayerProperties) {
    this._scene = scene;
    this._keyboard = keyboard;
  }

  public preload(): void {
    AssetsLoader.loadImageIntoScene({
      key: PlayerKey.image,
      src: "assets/player.png",
      scene: this._scene,
    });
  }

  public create(): void {
    this._entity = this._scene.matter.add.image(130, 100, PlayerKey.image);
    this._entity.setFixedRotation();
    this._entity.setOnCollide(() => {
      this._jumpsCounter = 0;
    });
  }

  public update(): void {
    this.handleKeyboardKeys();
  }

  private handleKeyboardKeys(): void {
    if (this._keyboard.keys.A.isDown) {
      this._entity.flipX = true;
      this._entity.setVelocityX(-this._velocity);
    }

    if (this._keyboard.keys.D.isDown) {
      this._entity.flipX = false;
      this._entity.setVelocityX(this._velocity);
    }

    if (!this._keyboard.keys.A.isDown && !this._keyboard.keys.D.isDown) {
      this._entity.setVelocityX(0);
    }

    const spaceJustPressed = Phaser.Input.Keyboard.JustDown(
      this._keyboard.keys.SPACE
    );

    if (
      spaceJustPressed &&
      this._jumpsCounter !== this._maxJumpsBeforeCollideWithGround
    ) {
      this._entity.setVelocityY(-10);
      this._jumpsCounter++;
    }
  }
}
