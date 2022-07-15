import Phaser from "phaser";

export type GameConfig = Phaser.Types.Core.GameConfig;
export type ArcadeGameObjectWithBody =
  Phaser.Types.Physics.Arcade.GameObjectWithBody;
export type MatterImage = Phaser.Physics.Matter.Image;
export type Tilemap = Phaser.Tilemaps.Tilemap;
export type Tileset = Phaser.Tilemaps.Tileset;
export type TilemapLayer = Phaser.Tilemaps.TilemapLayer;

export class GameScene extends Phaser.Scene {}
export class StaticGroup extends Phaser.Physics.Arcade.StaticGroup {}
export class ArcadeSprite extends Phaser.Physics.Arcade.Sprite {}
export class ArcadeStaticBody extends Phaser.Physics.Arcade.StaticBody {}
export class Text extends Phaser.GameObjects.Text {}
