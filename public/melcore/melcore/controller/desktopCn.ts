import {DispositiveCn} from "./dispositiveCn";

export class DesktopCn extends DispositiveCn {

    container: HTMLElement;
    element: HTMLElement;

    constructor() {
        super();
    }

    public init(container: HTMLElement, element: HTMLCanvasElement, event: MouseEvent) {
        this.container = container;
        this.element = element;
        // start the controller element
        this.graphics.set(element);
        // set first impact sector.
        this.y = event.y;
        this.x = event.x;

        /* SET EVENTS */
        this.element.onmouseup = (eve: MouseEvent) => this.ONMOUSEUP(eve);

        window.onmousemove = (eve: MouseEvent) => {
            this.ONMOUSEMOVE(eve)
            eve.stopPropagation();
        };
    }

    /* EVENTS */
    public ONMOUSEUP(eve: MouseEvent) {
        window.onmousemove = null;
    }

    public ONMOUSEMOVE(event: MouseEvent) {
        // when the mouse is in movement.
        this.controls(this.element, event);
        
        // circle mechanics
        this.movement(this.element, event);
        this.y = event.y;
        this.x = event.x;

    }
}
