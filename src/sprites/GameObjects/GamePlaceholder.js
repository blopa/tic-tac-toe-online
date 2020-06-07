import GameImage from '../Prefabs/GameImage';

class GamePlaceholder extends GameImage {
    constructor({
        scene,
        x = 0,
        y = 0,
        asset = 'blue_placeholder_element',
    }) {
        super({ scene, x, y, asset });

        this.setDepth(30);
        this.setOrigin(0, 0);
    }
}

export default GamePlaceholder;
