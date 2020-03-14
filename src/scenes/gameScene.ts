import "phaser";

export class GameScene extends Phaser.Scene {
  delta: number;
  info: Phaser.GameObjects.Text;

  constructor() {
    super({
      key: "GameScene"
    });
  }

  init(params): void {
    this.delta = 1000;
  }

  preload(): void {
    // TODO
  }
  
  create(): void {
    // TODO
  }

  update(time): void {
    // TODO
  }
};
