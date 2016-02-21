import {Farm} from "../../resources/farm";

class Store extends Farm {
    controllerPy: number;
    controllerPx: number;

    constructor() {
        super();
        //this.watch([
        //    {
        //        watch: "controllerPy",
        //        action: this.MOVE
        //    },
        //    {
        //        watch: "controllerPx",
        //        action: this.MOVE2
        //    }
        //]);
    }

    public MOVEMENT(y: number, x: number) {
        this.controllerPy = y;
        this.controllerPx = x;
    }

}

export default new Store();