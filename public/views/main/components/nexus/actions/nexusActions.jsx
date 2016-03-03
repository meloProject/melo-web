import Alt from '../../alt.jsx'

class NexusActions {

    settext(text) {
        document.getElementById("nex_text_container")
        .className = "nex_text_container";
        return text;
    }

    cubeGoTo(location) {
    	document.querySelector("#swittcher > section").classList.add("switchSection");
    	document.getElementById("nex_text_container")
            .className = "nex_text_container_out";
    	return location;
    }
}

export default Alt.createActions(NexusActions);
