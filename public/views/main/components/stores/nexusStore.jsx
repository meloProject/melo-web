import Alt from '../alt.jsx';
import NexusActions from '../nexus/actions/nexusActions.jsx';

class NexusStore {
    constructor() {

        this.text = "";
        this.background = "";
        this.fontColor = "";

        this.actuallyLocation;

        this.cubes = {
            female: {
                description: "Chica",
                background: "#FFEE58",
                fontColor: "#ce35e5" 
            },
            alien: {
                description: "Extraterrestre",
                background: "#74ef5c",
                fontColor: "#ba68c8"
            },
            male: {
                description: "Chico",
                background: "#1997f6",
                fontColor: "white"
            }
        };


        this.bindListeners({
            handleItemTextDescrition: NexusActions.SETTEXT,
            handlerCubeGoto: NexusActions.CUBE_GO_TO
        });

    }

    handleItemTextDescrition(type) {
        this.text = this.cubes[type].description;
        this.background = this.cubes[type].background;
    }

    handlerCubeGoto(type) {
        this.type = type;
        this.fontColor = this.cubes[type].fontColor;
    }
}

module.exports = Alt.createStore(NexusStore, 'NexusStore');
