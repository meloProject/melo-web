import Alt from '../../alt.jsx';
import Swittcher from '../../standars/swittcher.js';

class NexusActions {

    settext(text) {
        // se realizo la accion de mouse over para insertar texto descritibo.
        document.getElementById("nex_text_container")
        .className = "nex_text_container";
        return text;
    }

    cubeGoTo(location) {
        // se realiza la accion para ir a la proxima sesesion del mini spa nexus.
    	Swittcher.goTo("section-link");
    	document.getElementById("nex_text_container")
            .className = "nex_text_container_out";
    	return location;
    }
}

export default Alt.createActions(NexusActions);
