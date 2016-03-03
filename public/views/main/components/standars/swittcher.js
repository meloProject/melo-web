import _ from 'underscore';

export class Swittcher {
	
	constructor() {
		this.sections;
		this.actualPosition = 0;
	}

	init(name) {
		var sections;
		name = (name !== undefined)
			? "#" + name
			: "#swittcher";

		sections = document.querySelectorAll(name + "> section");
		this.sections = sections.length;
		console.log(name)
        _.each(sections, (value, key)=> {
            if(!key) {
                value.className = "sw_select";
            } else {
                value.className = "sw_deselect";
            }
        });
	}

	goTo(position) {

	}
};

export default new Swittcher();