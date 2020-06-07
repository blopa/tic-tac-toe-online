import { Game as PhaserGame } from 'phaser';

import BootScene from './scenes/BootScene';
import AssetsLoaderScene from './scenes/AssetsLoaderScene';
import GameScene from './scenes/GameScene';
import MainMenuScene from './scenes/MainMenuScene';

import config from './config/config';

const gameConfig = {
    ...config,
    scene: [
        BootScene,
        AssetsLoaderScene,
        MainMenuScene,
        GameScene,
    ],
};

class Game extends PhaserGame {
    constructor() {
        super(gameConfig);
    }
}

const phaserGame = new Game();

if (IS_DEV) {
    window.dump = function (...data) {
        data.forEach((element) => {
            console.log(
                JSON.parse(JSON.stringify(element))
            );
        });
    };

    window.dd = function (...data) {
        data.forEach((element) => {
            console.log(
                JSON.parse(JSON.stringify(element))
            );
        });

        throw new Error('Stopped execution because dd(), use dump() if you want to proceed');
    };

    window.game = phaserGame;
}
