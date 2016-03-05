import Alt from '../../alt.jsx';
import Swittcher from '../../standars/swittcher.js';

class NexusActions {

    setText(text) {
        // se realizo la accion de mouse over para insertar texto descritibo.
        document.getElementById("nex_text_container")
        .className = "nex_text_container";
        return text;
    }

    goTo(boxType) {
        // se realiza la accion para ir a la proxima sesesion del mini spa nexus.
    	Swittcher.goTo("section-contact");
    	document.getElementById("nex_text_container")
            .className = "nex_text_container_out";
    	return boxType;
    }

    goToGeneral(direction, location) {
        Swittcher.goTo(location);
        return location;
    }
}

export default Alt.createActions(NexusActions);
