import {DesktopCn} from "./melcore/melcore/controller/desktopCn";

let controller;
let element;
let panel;
let main;

element = document.createElement("canvas");
main = document.getElementById("main");
controller = new DesktopCn();

controller.set(main, element);
main.appendChild(element);
