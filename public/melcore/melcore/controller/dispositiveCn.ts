/// <reference path="../typings/bragi-browser/bragi-browser" />
import * as Bragi from "bragi-browser";
import {Melo, Dispositives} from "../melo";
import {Graphics} from "./res/graphs";
import Store from "./res/store";
import Comunication from "../resources/comunication";

export class DispositiveCn extends Melo implements Dispositives {
    graphics: Graphics;
    y: number;
    x: number;
    borderBottomTolerance: number;
    borderRightTolerence: number;
    returns: number;

    constructor() {
        super();
        this.borderBottomTolerance = 220;
        this.borderRightTolerence = 220;
        this.returns = 50;
        this.graphics = new Graphics();
    }

    public start() {
        this.graphics.start();
    }

    public stop() {
        this.graphics.stop();
    }

    public movement(element: HTMLElement, eve: MouseEvent) {
        /* 
        set actions when the circle is in motion.
        */
        let actualY: number = (eve.y - this.y) + element.offsetTop;
        let actualX: number = (eve.x - this.x) + element.offsetLeft;
        
        // store position.
        Store.MOVEMENT(actualY, actualX);

        // inform position.
        Comunication.transport("position", {
            x: Store.controllerPy,
            y: Store.controllerPx
        });
        
        // set position in DOM.
        element.style.top = Store.controllerPy + "px";
        element.style.left = Store.controllerPx + "px";
    }

    protected controls(element: HTMLElement, eve: Event) {
        let eY = element.offsetTop,
            eX = element.offsetLeft;
    }
}