import GameImage from '../Prefabs/GameImage';

class GameBox extends GameImage {
    constructor({
        scene,
        x = 0,
        y = 0,
        asset = 'blue_game_background',
    }) {
        super({ scene, x, y, asset });

        this.setDepth(20);
        this.setOrigin(0, 0);
    }
}

export default GameBox;
