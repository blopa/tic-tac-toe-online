import { isMobile } from 'mobile-device-detect';
import {
    MAIN_MENU_WIDTH_DESKTOP,
    MAIN_MENU_WIDTH_MOBILE,
    MIN_GAME_HEIGHT_DESKTOP,
    MIN_GAME_WIDTH_DESKTOP,
    MIN_GAME_WIDTH_MOBILE,
} from '../constants/config';

export const getGameSize = () => {
    if (isMobile) {
        const { innerWidth, innerHeight } = window;
        const mobileProportion = innerHeight / innerWidth;

        return [
            MIN_GAME_WIDTH_MOBILE,
            MIN_GAME_WIDTH_MOBILE * mobileProportion,
        ];
    }

    return [
        MIN_GAME_WIDTH_DESKTOP,
        MIN_GAME_HEIGHT_DESKTOP,
    ];
};

export const getMenuItemWidth = () => {
    if (isMobile) {
        return MAIN_MENU_WIDTH_MOBILE;
    }

    return MAIN_MENU_WIDTH_DESKTOP;
};

export const setGameScale = () => {
    const { innerWidth, innerHeight } = window;
    let widthProportion;
    let heightProportion;
    let minWidthSize;
    if (isMobile) {
        minWidthSize = MIN_GAME_WIDTH_MOBILE;
        widthProportion = Math.floor(
            innerWidth / MIN_GAME_WIDTH_MOBILE
        );

        heightProportion = Infinity;
        // const mobileProportion = innerHeight / innerWidth;
        // heightProportion = Math.floor(
        //     innerHeight / (innerHeight / mobileProportion)
        // );
    } else {
        minWidthSize = MIN_GAME_WIDTH_DESKTOP;
        widthProportion = Math.floor(
            innerWidth / MIN_GAME_WIDTH_DESKTOP
        );
        heightProportion = Math.floor(
            innerHeight / MIN_GAME_HEIGHT_DESKTOP
        );
    }

    const newProportion = Math.min(widthProportion, heightProportion);
    const divElem = document.getElementById('content');
    const canvasElem = divElem.children[0];

    if (newProportion > 1) {
        canvasElem.style.width = `${minWidthSize * newProportion}px`;
    }

    if (canvasElem.height * newProportion < innerHeight) {
        const marginTop =
            innerHeight - (canvasElem.height * newProportion);
        canvasElem.style.marginTop = `${marginTop / 2}px`;
    }
};
