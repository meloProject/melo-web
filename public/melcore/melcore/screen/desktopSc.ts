import {DispositiveSc} from "./dispositiveSc";

export class DesktopSc extends DispositiveSc {

    container: HTMLElement;
    element: HTMLElement;

    constructor() {
        super();
    }

    public init(container: HTMLElement, element: HTMLElement, event: MouseEvent) {
        // start the screen element
        this.graphics.set(element);
    }

    public setControllerListener() {

    }

    public moventRequest() {
    }
}
