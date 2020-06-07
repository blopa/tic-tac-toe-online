import { Scene } from 'phaser';

class AssetsLoaderScene extends Scene {
    constructor() {
        super('AssetsLoaderScene');
    }

    preload() {
        // load your assets
        this.load.image('parallax_background_1_a', 'assets/images/parallax_background_1_a.png');
        this.load.image('parallax_background_1_b', 'assets/images/parallax_background_1_b.png');
        this.load.image('parallax_background_1_c', 'assets/images/parallax_background_1_c.png');
        this.load.image('parallax_background_1_d', 'assets/images/parallax_background_1_d.png');
        this.load.image('parallax_background_1_e', 'assets/images/parallax_background_1_e.png');
        this.load.image('parallax_background_1_f', 'assets/images/parallax_background_1_f.png');
        this.load.image('parallax_background_2', 'assets/images/parallax_background_2.png');
        this.load.image('blue_game_background', 'assets/images/blue_game_background.png');
        this.load.image('blue_placeholder_element', 'assets/images/blue_placeholder_element.png');
    }

    create() {
        this.scene.start('MainMenuScene');
    }

    update() {
        // TODO
    }
}

export default AssetsLoaderScene;
