import {DispositiveCn} from "./dispositiveCn";
import Comunication from "../resources/comunication";

export class DesktopCn extends DispositiveCn {

    container: HTMLElement;
    element: HTMLElement;
    captureEvents: boolean;

    constructor() {
        super();
    }

    public set(container: HTMLElement, element: HTMLCanvasElement | HTMLElement) {
        this.container = container;
        this.element = element;
        this.element.className = "circlesOn";
        if (element.tagName === "CANVAS")
            this.graphics.set(<HTMLCanvasElement>element);     
    }

    public create(container: HTMLElement, element: HTMLCanvasElement | HTMLElement) {
        /*
        METHOD FOR TEST
        */
        this.container = container;
        this.element = element;
        if (element.tagName === "CANVAS")
            this.graphics.set(<HTMLCanvasElement>element);
    }

    /* EVENTS */
    public ONMOUSEUP(eve: MouseEvent) {
        // desattach event for mouse move
        this.captureEvents = false;
        this.stop();
    }

    public ONMOUSEDOWN(event: MouseEvent) {
        this.captureEvents = true;

        // center element on center of mouse pointer
        this.element.style.top = (event.y - this.ch / 2) + "px";
        this.element.style.left = (event.x - this.cx / 2) + "px";
        this.element.className = "circlesOn";

        // set first impact sector.
        this.y = event.y;
        this.x = event.x;

        let handleEvent = (event: MouseEvent) => {
            if (this.captureEvents)
                this.ONMOUSEMOVE(event);
            else
                this.container.removeEventListener("mousemove", handleEvent);
        }

        // attach event for mouse move
        this.container.addEventListener("mousemove", handleEvent);
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
