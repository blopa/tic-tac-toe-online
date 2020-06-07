import { GameObjects } from 'phaser';
import {
    getCustomBounds,
    setCustomBounds,
    setSpriteKey,
    verticallyCenterObject,
} from '../mixins/mixins';

class GameImage extends GameObjects.Image {
    constructor({
        scene,
        x = 0,
        y = 0,
        asset,
    }) {
        super(scene, x, y, asset);

        Object.assign(this, {
            setSpriteKey,
            verticallyCenterObject,
            setCustomBounds,
            getCustomBounds,
        });

        this.setOrigin(0, 0);
    }
}

export default GameImage;
