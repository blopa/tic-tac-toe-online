import { Scene } from 'phaser';
import ParallaxBackground from '../sprites/ParallaxBackground';
import GameBox from "../sprites/GameObjects/GameBox";
import GamePlaceholder from "../sprites/GameObjects/GamePlaceholder";

class GameScene extends Scene {
    constructor() {
        super('GameScene');
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

        const gameBox = new GameBox({
            scene: this,
            y: 20,
        });
        this.add.existing(gameBox);
        gameBox.verticallyCenterObject();

        const gamePlaceholder = new GamePlaceholder({
            scene: this,
            x: 167,
            y: 33,
        });
        this.add.existing(gamePlaceholder);
    }

    update(time, delta) {
        this.sceneParallaxBackgroundSprite.update(time, delta);
    }
}

export default GameScene;
