import {DesktopCn} from "../melcore/melcore/controller/desktopCn";

export class Tests {
    static setGlobals() {
        (<any>window).createController = (classElement?: string, container?: string) => {
            let element: any = document.createElement("canvas"),
                main: HTMLElement = document.getElementById("controllerContainer"),
                controller: any;
            classElement = classElement || "circlesOn";
            let elementContainer = document.createElement("div");

            element.className = classElement;
            element.id = "canvasTest";
            elementContainer.className = "circleContainer";

            controller = new DesktopCn();
            controller.create(main, element);
            controller.start();

            elementContainer.appendChild(element);
            main.appendChild(elementContainer);
            console.log("created new controller");
            return element;
        }
        (<any>window).removeController = (container?: string) => {
            let elements: any = document.querySelectorAll(".circleContainer"),
                main: HTMLElement = document.getElementById("controllerContainer");
            try {

                for (let h in elements) {
                    if (typeof elements[h] === "object") main.removeChild(elements[h]);
                }

            } catch (err) {
                return "something's wrong " + err;
            }

            return "All controllers removed";
        }
    }
}

