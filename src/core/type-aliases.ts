import Phaser from "phaser";

export type GameConfig = Phaser.Types.Core.GameConfig;

export class GameScene extends Phaser.Scene {}

export class StaticGroup extends Phaser.Physics.Arcade.StaticGroup {}

export class ArcadeSprite extends Phaser.Physics.Arcade.Sprite {}

export class ArcadeStaticBody extends Phaser.Physics.Arcade.StaticBody {}

export type ArcadeGameObjectWithBody =
  Phaser.Types.Physics.Arcade.GameObjectWithBody;
