import {Dispositive, Dispositives} from "./dispositive";

interface Setup {
    asyncMethod: () => Promise<number>;
}

export class DesktopCn extends Dispositive implements Dispositives {

    container: HTMLElement;
    element: HTMLElement;

    constructor() {
        super();
    }

    public init(container: HTMLElement, element: HTMLElement | any, event: MouseEvent) {
        let test: number = 0;

        async function delay(milliseconds: number) {
            return new Promise<void>(resolve => {
                setTimeout(resolve, milliseconds);
            });
        }

        async function asyncMethodImplementation() {
            await setTimeout(() => {
                test = 1;
            }, 4000)

            return test;
        }

        asyncMethodImplementation()

        // start the controller element
        this.graphics.set(element);
        // set first impact sector.
        this.y = event.y;
        this.x = event.x;
        
        this.element = element || this.error("error:DesktopCn", "the element is needed!");
        this.container = container;

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
