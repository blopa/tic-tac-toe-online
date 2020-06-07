import { GameObjects } from 'phaser';
import GameGroup from './Prefabs/GameGroup';

class ParallaxBackground extends GameGroup {
    constructor({
        scene,
        x = 0,
        y = 0,
        name = 'background',
        assets = [
            'parallax_background_2',
        ],
        baseAssets = [
            'parallax_background_1_a',
            'parallax_background_1_b',
            'parallax_background_1_c',
            'parallax_background_1_d',
            'parallax_background_1_e',
            'parallax_background_1_f',
        ],
    }) {
        super({ scene, children: [], name });

        const baseAsset =
            baseAssets[Math.floor(Math.random() * baseAssets.length)];

        const parallaxes = [
            baseAsset,
            ...assets,
        ];

        for (const parallax of parallaxes) {
            const parallaxBackground = new GameObjects.Image(
                scene,
                x,
                y,
                parallax
            )
                .setOrigin(0, 0);

            const { width } = parallaxBackground.getBounds();
            const parallaxBackgroundClone = new GameObjects.Image(
                scene,
                x - width,
                y,
                parallax
            )
                .setOrigin(0, 0);

            // if (Math.random() >= 0.5) {
            //     // TODO
            //     parallaxBackground.flipX(true);
            //     parallaxBackgroundClone.flipX(true);
            // }

            this.add(parallaxBackground);
            this.add(parallaxBackgroundClone);
        }

        this.setDepth(10);
        this.setOrigin(0, 0);
    }

    update = (time, delta) => {
        const speeds = [0.2, 0.6];
        let index = 0;
        if (this.getChildren()) {
            for (const child of this.getChildren()) {
                const { width } = child.getBounds();
                if (child.x >= width) {
                    child.setX(0 - width);
                }

                child.setX(child.x + speeds[Math.floor(index / 2)]);
                index += 1;
            }
        }
    }
}

export default ParallaxBackground;
