import Alt from '../alt.jsx';
import NexusActions from '../nexus/actions/nexusActions.jsx';

class NexusStore {
    constructor() {
        // TEXTO BOX SELECTION TYPE.
        this.textType = "";

        // SECTION CONFIGS AND CUSTOMS.
        this.sectionClass = "";
        this.classLateralIcons = "";
        this.actuallyLocation;

        this.cubes = {
            female: {
                description: "Chica",
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
            handleItemTextDescrition: NexusActions.SETTEXT,
            handlerCubeGoto: NexusActions.CUBE_GO_TO
        });

    }

    handleItemTextDescrition(type) {
        // HANDLER FOR INSERT TEXTO DE DESCRIPCION DE LOS TIPOS.
        this.textType = this.cubes[type].description;
        this.sectionClass = this.cubes[type].sectionClass;
    }

    handlerCubeGoto(type) {
        // HANDLER DISPARADO CUANDO SE ELIGE UNA SECCION.
        this.type = type;
        this.classLateralIcons = this.cubes[type].classLateralIcons;
    }
}

module.exports = Alt.createStore(NexusStore, 'NexusStore');
