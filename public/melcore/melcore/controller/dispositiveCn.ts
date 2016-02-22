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
    cx: number;
    ch: number;
    borderBottomTolerance: number;
    borderRightTolerence: number;
    returns: number;

    constructor() {
        super();
        this.cx = 240;
        this.ch = 240;
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

    public movement(element: HTMLElement, event: MouseEvent) {
        /* 
        set actions when the circle is in motion.
        */
        let actualY: number = (event.y - this.y) + element.offsetTop;
        let actualX: number = (event.x - this.x) + element.offsetLeft;
        
        // store position.
        Store.MOVEMENT(actualY, actualX);

        // inform position.
        //Comunication.transport("updateposition", {
        //    positionX: Store.controllerPy,
        //    positionY: Store.controllerPx
        //});
        
        // set position in DOM.
        element.style.top = actualY + "px";
        element.style.left = actualX + "px";
    }

    protected controls(element: HTMLElement, eve: Event) {
        let eY = element.offsetTop,
            eX = element.offsetLeft;
    }

}