import {DesktopCn} from "./melcore/melcore/controller/desktopCn";

let count = 0;
let controller;
let element;
let panel;
controller = new DesktopCn();

addEventListener("mousedown", (eve) => {
    
    panel = document.getElementById("panel");
    element = document.createElement("canvas");
    // set props of canvas element controller
    let ch = 240, cx = 240;
    element.id = "controller" + count;
    element.className = "circles";
    element.style.top = (eve.y - ch / 2) + "px";
    element.style.left = (eve.x - cx / 2) + "px";

    controller.init(document.getElementById("main"), element, eve);
    controller.onLoop = strings => panel.innerHTML = strings;
    controller.start();

    element.className = "circlesExpandedAnimation";
    document.getElementById("main").appendChild(element);
});

addEventListener("mouseup", () => {
    controller.stop();
    document.getElementById("main").removeChild(document.getElementById("controller" + count));
});