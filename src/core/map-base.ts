import { GameScene, Tilemap, TilemapLayer, Tileset } from "./type-aliases";

interface GameMapParameters {
  scene: GameScene;
}

// TODO: clean up
// enum Map {
// name of the layer from the Tiled
// mapId = "map",
// tilesId = "groundTiles",
// tilemapId = "groundTilemap",
// name of the tileset from the Tiled
// tilesetId = "ground",
// }

export class GameMapBase {
  protected readonly scene!: GameScene;
  private _tilemap!: Tilemap;
  private _tileset!: Tileset;
  private _mapLayers: { [key: string]: TilemapLayer } = {};

  constructor({ scene }: GameMapParameters) {
    this.scene = scene;
  }

  protected makeTilemap(key: string): void {
    this._tilemap = this.scene.make.tilemap({ key });
  }

  protected makeTileset(key: string, tilesKey: string): void {
    this._tileset = this._tilemap.addTilesetImage(key, tilesKey);
  }

  protected createMapLayer(key: string): void {
    this._mapLayers[key] = this._tilemap.createLayer(key, this._tileset);
  }

  protected convertTilemapLayer(key: string): void {
    this.scene.matter.world.convertTilemapLayer(this._mapLayers[key]);
  }

  protected getMapLayer(key: string): TilemapLayer {
    return this._mapLayers[key];
  }

  protected get tileset(): Tileset {
    return this._tileset;
  }
}
