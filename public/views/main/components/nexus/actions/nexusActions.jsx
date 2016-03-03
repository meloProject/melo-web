import Alt from '../../alt.jsx'

class NexusActions {

    settext(text) {
        document.getElementById("nex_text_container")
        .className = "nex_text_container";
        return text;
    }

    cubeGoTo(location) {
    	
    }
    
}

export default Alt.createActions(NexusActions);
