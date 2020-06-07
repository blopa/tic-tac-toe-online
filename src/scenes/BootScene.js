import { Scene } from 'phaser';
import WebFont from 'webfontloader';
import { setGameScale } from '../utils/gameConfig';

class BootScene extends Scene {
    constructor() {
        super('BootScene');
        setGameScale();
    }

    preload() {
        // TODO
    }

    update() {
        this.scene.start('AssetsLoaderScene');
    }
}

export default BootScene;
