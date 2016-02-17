/// <reference path="../../../../../typings/bragi-browser/bragi-browser" />

import * as Bragi from "bragi-browser";
import {Dispositive, Dispositives} from "./dispositive";

export class DesktopCn extends Dispositive implements Dispositives {

    container: HTMLElement;
    element: HTMLElement;
    y: number;
    x: number;
    borderBottomTolerance: number;
    borderRightTolerence: number;
    returns: number;

    constructor() {
        super();
    }

    public start(container: HTMLElement, element: HTMLElement | any, eve: any) {
        // start the controller graphics
        this.setGraphics(element);
        this.initGraphics();

        this.element = element || this.error("error:DesktopCn", "the element is needed!");
        // set events
        this.element.onmouseup = eve => this.onMouseup(eve);
        document.onmousemove = eve => this.onMousemove(eve);
        // set impact sector.
        this.y = eve.y;
        this.x = eve.x;

        this.borderBottomTolerance = 220;
        this.borderRightTolerence = 220;

        this.returns = 50;
        this.container = container;
    }

    /* EVENTS */
    public onMouseup(eve) {
        document.onmousemove = null;
    }

    public onMousemove(eve) {
        // when the mouse is in movement.
        this.controls(this.element, eve);
        this.movement(this.element, eve);
        this.y = eve.y;
        this.x = eve.x;
    }

    /* ACTIONS */
    protected movement(element: HTMLElement, eve) {
        /* 
        set actions when the circle is in motion.
        */
        let actualY: number = (eve.y - this.y) + this.element.offsetTop;
        let actualX: number = (eve.x - this.x) + this.element.offsetLeft;

        element.style.top = actualY + "px";
        element.style.left = actualX + "px";
    }

    private controls(element: HTMLElement, eve: Event) {
        let eY = element.offsetTop,
            eX = element.offsetLeft;
    }
}