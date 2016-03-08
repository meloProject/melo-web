import Alt from '../../alt.jsx';
import Swittcher from '../../standars/swittcher.js';

class NexusActions {

    waitFor(wfor) {
        return wfor;
    }

    setText(text) {
        // se realizo la accion de mouse over para insertar texto descritibo.
        document.getElementById("nex_text_container")
        .className = "nex_text_container";
        return text;
    }

    goTo(boxType) {
        // se realiza la accion para ir a la proxima sesesion de los boxTypes.
    	Swittcher.goTo("section-contact");
    	document.getElementById("nex_text_container")
            .className = "nex_text_container_out";
    	return boxType;
    }

    goToGeneral(direction, location) {
        Swittcher.goTo(location);
        return location;
    }

    getQr() {
        // create session the sesion have the qr code room.
        return (dispatch) => {
            setTimeout(() => {
                document.querySelector(".top_link_post")
                    .classList.add("qrcodreReady");
                dispatch("www.apirest.com/melo/getcodeqr")
            }, 2000);
        };
    }
}

export default Alt.createActions(NexusActions);
