import { CreateHook, PreloadHook } from "../../core/hooks";
import { GameMapBase } from "../../core/map-base";
import { AssetsLoader } from "../../core/utils/assets-loader";

enum PlatformerMapKey {
  TiledLayerKey = "map",
  JSONTilemapKey = "groundTilemap",
  TilesKey = "groundTiles",
  TilesetKey = "ground",
}

export class PlatformerMap
  extends GameMapBase
  implements PreloadHook, CreateHook
{
  public preload(): void {
    AssetsLoader.loadImageIntoScene({
      key: PlatformerMapKey.TilesKey,
      src: "assets/ground-tiles.png",
      scene: this.scene,
    });

    AssetsLoader.loadJSONMapIntoScene({
      key: PlatformerMapKey.JSONTilemapKey,
      src: "assets/map.json",
      scene: this.scene,
    });
  }

  public create(): void {
    this.makeTilemap(PlatformerMapKey.JSONTilemapKey);
    this.makeTileset(PlatformerMapKey.TilesetKey, PlatformerMapKey.TilesKey);
    this.createMapLayer(PlatformerMapKey.TiledLayerKey);
    this.getMapLayer(PlatformerMapKey.TiledLayerKey).setCollisionByProperty({
      isCollidable: true,
    });
    this.convertTilemapLayer(PlatformerMapKey.TiledLayerKey);
  }
}
