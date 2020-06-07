import Phaser from 'phaser';
import { getGameSize } from '../utils/gameConfig';

const [width, height] = getGameSize();
console.log({ width, height });

export default {
    type: Phaser.AUTO,
    parent: 'content',
    width,
    height,
    // scale: {
    //     mode: Phaser.Scale.HEIGHT_CONTROLS_WIDTH,
    //     autoCenter: Phaser.Scale.CENTER_BOTH,
    // },
    autoRound: true,
    localStorageName: 'pixel-heroes-showdown',
    pixelArt: true,
};
