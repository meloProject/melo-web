/// <reference path="../typings/bragi-browser/bragi-browser" />
import * as Bragi from "bragi-browser";
import {Graphics} from "./res/graphs";
import Store from "./res/store";

export abstract class Dispositives {

}


export class Dispositive {
    graphics: Graphics;
    y: number;
    x: number;
    borderBottomTolerance: number;
    borderRightTolerence: number;
    returns: number;

    constructor() {
        this.borderBottomTolerance = 220;
        this.borderRightTolerence = 220;
        this.returns = 50;
        this.graphics = new Graphics();
    }

    public error(group: string, message: string) {
        Bragi.log(group, message);
        throw Error(message);
    }

    public start() {
        this.graphics.start();
    }

    public stop() {
        this.graphics.stop();
    }

    protected movement(element: HTMLElement, eve: MouseEvent) {
        /* 
        set actions when the circle is in motion.
        */
        let actualY: number = (eve.y - this.y) + element.offsetTop;
        let actualX: number = (eve.x - this.x) + element.offsetLeft;
        
        // store position.
        Store.MOVEMENT(actualY, actualX);

        // inform position.

        
        // set position in dom.
        element.style.top = Store.controllerPy + "px";
        element.style.left = Store.controllerPx + "px";
    }

    protected controls(element: HTMLElement, eve: Event) {
        let eY = element.offsetTop,
            eX = element.offsetLeft;
    }
}