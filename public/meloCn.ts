import {DesktopCn} from "./melcore/melcore/controller/desktopCn";
let controller,
element,
panel,
main;

element = document.createElement("canvas");
main = document.getElementById("main");
controller = new DesktopCn();


controller.set(main, element);
main.appendChild(element);