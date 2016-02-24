/// <reference path="../typings/bragi-browser/bragi-browser" />
import * as Bragi from "bragi-browser";
import { Melo, Dispositives } from "../melo";
import { Graphics } from "./res/graphs";
import Store from "./res/store";
import Sockets from "../resources/Sockets";

export class DispositiveCn extends Melo implements Dispositives {
    graphics: Graphics;
    y: number;
    x: number;
    cx: number;
    ch: number;
    channel: number;
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

        // Caution: these methods are called whenever the class is instanced.
        this.graphics = new Graphics();

        Sockets.socketOnMessages((message: any) => {
            console.log(message);
        });

        // suscribge to channel for this controllers. deberia ir con el id del controller harcodeado con controller
        Sockets.socketSuscribeToChannel("controller")
            .then((message: any) => {
                console.log(message);
            }).catch((message) => {
                console.error(message);
            });
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
        Sockets.comuPosition({
            brodcastChannel: "screen",
            positionX: Store.controllerPy,
            positionY: Store.controllerPx
        }).then((message: any) => {
            console.log(message);
        }).catch((message) => {
            console.error(message);
        });

        // set position in DOM.
        element.style.top = actualY + "px";
        element.style.left = actualX + "px";
    }

    protected controls(element: HTMLElement, eve: Event) {
        let eY = element.offsetTop,
            eX = element.offsetLeft;
    }

}