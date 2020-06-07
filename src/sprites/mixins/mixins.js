/* eslint babel/no-invalid-this: 0 */

export function setSpriteKey(spriteKey) {
    this.spriteKey = spriteKey;
}

export function verticallyCenterObject() {
    const { width: gameWidth } = this.scene.sys.game.canvas;
    const { width } = this.getCustomBounds();
    this.setX(((gameWidth - width) / 2));
}

export function setCustomBounds(customBounds) {
    this.customBounds = customBounds;
}

export function getCustomBounds() {
    if (this.customBounds) {
        return this.customBounds;
    }

    return this.getBounds();
}
