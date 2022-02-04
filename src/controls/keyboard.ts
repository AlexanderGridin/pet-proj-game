import { GameScene } from "../core/type-aliases";

const keyboardKeys: string = "W,A,S,D";

export class Keyboard {
  public readonly keys: {
    [key: string]: Phaser.Input.Keyboard.Key;
  } = {};

  constructor(private readonly scene: GameScene) {}

  public preload(): void {
    keyboardKeys.split(",").forEach((key) => {
      this.keys[key] = this.scene.input.keyboard.addKey(key);
    });
  }
}
