import Alt from '../alt.jsx';
import NexusActions from '../nexus/actions/nexusActions.jsx';

class NexusStore {
    constructor() {
        // TEXTO BOX SELECTION TYPE.
        this.textType = "";

        // SECTION CONFIGS AND CUSTOMS.
        this.sectionClass = "section-default";
        this.classLateralIcons = "icons-default";

        this.cubes = {
            female: {
                description: "Trivia punch!",
                sectionClass: "section-female",
                classLateralIcons: "icons-female"
            },
            alien: {
                description: "Extraterrestre",
                sectionClass: "section-alien",
                classLateralIcons: "icons-alien"
            },
            male: {
                description: "Chico",
                sectionClass: "section-male",
                classLateralIcons: "icons-male"
            }
        };

        this.bindListeners({
            handleItemTextDescrition: NexusActions.SET_TEXT,
            handlerGotoGeneral: NexusActions.GO_TO_GENERAL, 
            handlerGoto: NexusActions.GO_TO
        });
    }

    handleItemTextDescrition(type) {
        // HANDLER FOR INSERT TEXTO DESCRIPTION TYPES.
        this.textType = this.cubes[type].description;
    }

    handlerGoto(type) {
        // HANDLER DISPARADO CUANDO SE ELIGE UNA SECCION.
        this.type = type;
        this.classLateralIcons = this.cubes[type].classLateralIcons;
        this.sectionClass = this.cubes[type].sectionClass;
    }

    handlerGotoGeneral(location) {
        if(location == "section-type")
            this.classLateralIcons = "icons-default";
    }
}

module.exports = Alt.createStore(NexusStore, 'NexusStore');
