# Phaser notes

## Scene

Type: **class Phaser.Scene**

Hooks:

```typescript
public init(): void {}

// preload() is called to allow us to specify images, audio, or other assets to load before starting the Scene.
public preload(): void {}

// create() is called once all the assets for the Scene have been loaded. Only assets that have been loaded can be used in create().
public create(): void {}
public update(): void {}
```

## Loading assets

```typescript
// 'this' references to the class that extends Phaser.Scene class
public preload(): void {
  // The imageKeyString will be used later as a reference for creating images or sprites that are rendered by Phaser
  this.load.image(imageKeyString, pathToImageStrgin);
}
```

## Adding assets to scene

```typescript
// 'this' references to the class that extends Phaser.Scene class
public create(): void {
  this.add.image(posX, posY, imageKeyString);

  // add image with setting scale
  // the 'value' is between 0 and 1
  this.add.image(posX, posY, imageKeyString).setScale(value);

  // add physics-enabled assets
  this.physics.add.image(posX, posY, imageKeyString).setScale(value);
  this.physics.add.sprite(posX, posY, imageKeyString).setScale(value);

}
```

## Creating a StaticGroup of physics-enabled assets

```typescript
public create(): void {
  const group = this.physics.add.statcGroup();

  for (let i = 0; i < itemsTotal; i++) {
    const item: Phaser.Physics.Arcade.Sprite = group.create(
      posX,
      posY,
      imageKeyString
    );
    item.scale = value;

    // this will refresh the physics body based on any changes we made to the GameObject like position and scale
    item.body.updateFromGameObject();
  }
}
```

## Adding collisions

```typescript
public create(): void {
  this.physics.add.collider(items, player);
}
```
