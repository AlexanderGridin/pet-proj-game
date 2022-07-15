import { GameScene } from "../type-aliases";

interface AssetsLoaderProps {
  key: string;
  src: string;
  scene: GameScene;
}

export class AssetsLoader {
  public static loadImageIntoScene({
    key,
    src,
    scene,
  }: AssetsLoaderProps): void {
    scene.load.image(key, src);
  }

  public static loadJSONMapIntoScene({
    key,
    src,
    scene,
  }: AssetsLoaderProps): void {
    scene.load.tilemapTiledJSON(key, src);
  }
}
