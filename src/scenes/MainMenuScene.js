import { Scene } from 'phaser';
import ParallaxBackground from '../sprites/ParallaxBackground';

class MainMenuScene extends Scene {
    constructor() {
        super('MainMenuScene');
    }

    init() {
        // TODO
    }

    preload() {
        // TODO
    }

    create() {
        this.sceneParallaxBackgroundSprite = new ParallaxBackground({
            scene: this,
        });

        for (const parallaxBackground of this.sceneParallaxBackgroundSprite.getChildren()) {
            this.add.existing(parallaxBackground);
        }
        this.scene.start('GameScene');
    }

    update(time, delta) {
        this.sceneParallaxBackgroundSprite.update(time, delta);
    }
}

export default MainMenuScene;
