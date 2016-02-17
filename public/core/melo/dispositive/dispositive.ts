/// <reference path="../../../../../typings/bragi-browser/bragi-browser" />
import * as Bragi from "bragi-browser";
import {Graphics} from "./graphs";

export abstract class Dispositives {

}

export class Dispositive extends Graphics {
    graphics: Graphics;
    constructor() {
        super();
    }
    error(group, message) {
        Bragi.log(group, message);
        throw Error(message);
    }
}