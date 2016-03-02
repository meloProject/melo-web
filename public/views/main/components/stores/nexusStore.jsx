import Alt from '../alt.jsx';
import NexusActions from '../nexus/actions/nexusActions.jsx';

class NexusStore {
    constructor() {

        this.text = "";
        this.cubes = {
            "female": {
                "description": "Chica"
            },
            "alien": {
                "description": "Extraterrestre"
            },
            "male": {
                "description": "Chico"
            }
        };


        this.bindListeners({
            handleItemTextDescrition: NexusActions.SETTEXT
        });

    }

    handleItemTextDescrition(type) {
        this.text = this.cubes[type].description;
    }
}

module.exports = Alt.createStore(NexusStore, 'NexusStore');
