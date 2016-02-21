/// <reference path="../typings/bragi-browser/bragi-browser" />
import * as Bragi from "bragi-browser";
import {Melo, Dispositives} from "../melo";
import {Graphics} from "./res/graphs";
import Store from "./res/store";
import Comunication from "../resources/comunication";

export class DispositiveSc extends Melo {

    graphics: Graphics;
    y: number;
    x: number;

    constructor() {
        super();
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
        set.
        */
        let actualY: number = (eve.y - this.y) + element.offsetTop;
        let actualX: number = (eve.x - this.x) + element.offsetLeft;

        // set position in dom.
        element.style.top = actualY + "px";
        element.style.left = actualX + "px";

        // store position.
        Store.MOVEMENT(actualY, actualX);
    }

    protected controls(element: HTMLElement, eve: Event) {
        let eY = element.offsetTop,
            eX = element.offsetLeft;
    }
}