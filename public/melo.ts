/// <reference path="../../typings/bragi-browser/bragi-browser" />
import * as Bragi from "bragi-browser";
import {DesktopCn} from "./core/melo/dispositive/despktopCn";

// configure the logger
Bragi.addGroup("Graphics");
Bragi.options.groupsEnabled = [ "Graphics"];
console.log('controller start');

    let count = 0;
    let controller;
    let element;

    addEventListener("mousedown", (eve) => {
        element = document.createElement("canvas");
        // set props of canvas element controller
        let ch = 230, cx = 230;
        element.id = "controller" + count;
        element.style.top =  (eve.y - ch / 2) + "px";
        element.style.left = (eve.x  - cx / 2) + "px";

        controller = new DesktopCn();
        controller.start(document.getElementById("main"), element, eve);
        
        document.getElementById("main").appendChild(element);
    });

    addEventListener("mouseup", () => {
        controller.stopGraphics();
        document.getElementById("main").removeChild(document.getElementById("controller" + count));
    });