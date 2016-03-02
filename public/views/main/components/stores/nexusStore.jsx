import Alt from '../alt.jsx';
import nexusActions from '../nexus/actions/nexusActions.jsx';

class NexusStore {
  constructor() {
    this.itemTextDescrition;

     this.bindListeners({
      handleItemTextDescrition: nexusActions.SETTEXTFORCHACARTERDES,
    });

  }

  handleItemTextDescrition(text) {
    this.text = text;
  }  

}

module.exports = Alt.createStore(NexusStore, 'NexusStore');