import Alt from '../alt.jsx';
import NexusActions from '../nexus/actions/nexusActions.jsx';

class NexusStore {
    constructor() {

        this.text = "";
        this.background = "";
        this.fontColor = "";

        this.cubes = {
            female: {
                description: "Chica",
                background: "#FFEE58",
                fontColor: "#333" 
            },
            alien: {
                description: "Extraterrestre",
                background: "#74ef5c",
                fontColor: "white"
            },
            male: {
                description: "Chico",
                background: "#1997f6",
                fontColor: "white"
            }
        };


        this.bindListeners({
            handleItemTextDescrition: NexusActions.SETTEXT
        });

    }

    handleItemTextDescrition(type) {
        this.text = this.cubes[type].description;
        this.background = this.cubes[type].background;
        this.fontColor = this.cubes[type].fontColor;
    }
}

module.exports = Alt.createStore(NexusStore, 'NexusStore');
