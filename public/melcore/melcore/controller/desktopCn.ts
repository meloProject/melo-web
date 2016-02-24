import {DispositiveCn} from "./dispositiveCn";
import Comunication from "../resources/comunication";

export class DesktopCn extends DispositiveCn {

    container: HTMLElement;
    element: HTMLElement;

    constructor() {
        super();
    }

    public set(container: HTMLElement, element: HTMLCanvasElement | HTMLElement) {
        this.container = container;
        this.element = element;
        this.element.className = "circlesOff";
        if (element.tagName === "CANVAS") this.graphics.set(<HTMLCanvasElement>element);

        /* SET EVENTS */
        window.onmouseup = (event: MouseEvent) => this.ONMOUSEUP(event);
        window.onmousedown = (event: MouseEvent) => this.ONMOUSEDOWN(event);
    }

    /* EVENTS */
    public ONMOUSEUP(eve: MouseEvent) {
        // desattach event for mouse move
        window.onmousemove = null;
        this.element.className = "circlesOff";
        this.stop();
    }

    public ONMOUSEDOWN(event: MouseEvent) {
        // center element on center of mouse pointer
        this.element.style.top = (event.y - this.ch / 2) + "px";
        this.element.style.left = (event.x - this.cx / 2) + "px";
        this.element.className = "circlesOn";

        // set first impact sector.
        this.y = event.y;
        this.x = event.x;

        // attach event for mouse move
        window.onmousemove = (event: MouseEvent) => this.ONMOUSEMOVE(event);
        this.start();
    }

    public ONMOUSEMOVE(event: MouseEvent) {
        // when the mouse is in movement.
        this.controls(this.element, event);
        // circle mechanics
        this.movement(this.element, event);

        // set position.
        this.y = event.y;
        this.x = event.x;
    }
}
