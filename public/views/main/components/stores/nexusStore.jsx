import Alt from '../alt.jsx';
import NexusActions from '../nexus/actions/nexusActions.jsx';

class NexusStore {
    constructor() {
        // TEXTO BOX SELECTION TYPE.
        this.textType = "";

        // SECTION LINK
        this.qrcode = "normal";

        // SECTION CONFIGS AND CUSTOMS.
        this.sectionClass = "section-default";
        this.classLateralIcons = "icons-default";

        this.cubes = {
            cube1: {
                description: "Trivia",
                sectionClass: "section-cube1",
                classLateralIcons: "icons-cube1"
            },
            cube2: {
                description: "Extraños",
                sectionClass: "section-cube2",
                classLateralIcons: "icons-cube2"
            },
            cube3: {
                description: "Mentales",
                sectionClass: "section-cube3",
                classLateralIcons: "icons-cube3"
            }
        };

        this.bindListeners({
            handleItemTextDescrition: NexusActions.SET_TEXT,
            handlerGotoGeneral: NexusActions.GO_TO_GENERAL, 
            handlerGoto: NexusActions.GO_TO,
            handlerQR: NexusActions.GET_QR,
            handlerWaitFor: NexusActions.WAIT_FOR
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
        switch(location) {
            case "section-type":
                this.classLateralIcons = "icons-default";
                break;
            case "section-link":
                this.classLateralIcons = "icons-default";
                break;
        }
    }

    handlerWaitFor(waitFor) {
        switch(waitFor) {
            case "forQR":
                this.qrcode = "wait";
                break;
        }
    }

    handlerQR(QRrequest) {
        this.qrcode = QRrequest;
    }
}

module.exports = Alt.createStore(NexusStore, 'NexusStore');
