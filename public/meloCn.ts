import {DesktopCn} from "./melcore/melcore/controller/desktopCn";
import { Tests } from "./tests/tests";

/* SET TESTS*/
Tests.setGlobals();

var controllers = controllers || {},
    controllersID = 0;

addEventListener('load', () => {
    let element: HTMLCanvasElement = document.createElement("canvas"),
        main: HTMLElement = document.getElementById("controllerContainer");

    /* SET EVENTS */
    main.addEventListener("mouseup", (event: MouseEvent) => {
        controllers[controllersID].ONMOUSEUP(event);
        main.removeChild(element);
        delete controllers[controllersID];

        console.log("controllers: " + Object.keys(controllers).length);
    });

    main.addEventListener("mousedown", (event: MouseEvent) => {
        controllersID++;
        controllers[controllersID] = new DesktopCn();
        controllers[controllersID]["set"](main, element);
        main.appendChild(element);
        controllers[controllersID].ONMOUSEDOWN(event);

        console.log("controllers: " + Object.keys(controllers).length);
    });
});


