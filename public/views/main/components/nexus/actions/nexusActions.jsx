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
        this.waitFor("forQR");
        document.getElementById("linker")
                    .classList.add("qrcode_wait");
        // create session the sesion have the qr code room.
        return (dispatch) => {
            setTimeout(() => {
                document.getElementById("linker")
                    .classList.remove("qrcode_wait");
                document.getElementById("linker")
                    .className= "linker_whit_code";
                dispatch("www.apirest.com/melo/getcodeqr")
            }, 9000);
        };
    }
}

export default Alt.createActions(NexusActions);
