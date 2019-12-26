import Phaser from 'phaser';

export default {
    type: Phaser.AUTO,
    parent: 'content',
    width: 800,
    height: 600,
    scale: {
        mode: Phaser.Scale.HEIGHT_CONTROLS_WIDTH,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    autoRound: false,
    localStorageName: 'phaseres6webpack',
    pixelArt: true,
};
