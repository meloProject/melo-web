import _ from 'underscore';

export class Swittcher {

    constructor() {
        this.sections = [];
        this.HTMLSectionsElements = this.HTMLSectionsElements || {};
        this.restart;

        this.onStart;
        this.onEnd;

        this.sectionCurrent;

        this.config = {
            scroll: true
        }
    }

    init(name) {
        name = (name !== undefined) ? "#" + name : "#swittcher";

        if (!document.querySelectorAll(name + "> section").length)
            throw Error("Not sections for work");

        _.each(document.querySelectorAll(name + "> section"), (value, key) => {
            // convert array of sections in object sections.
            this.HTMLSectionsElements[value.id] = value;

            value.addEventListener("animationstart", (eve) => {
                if (typeof this.onStart === "function") this.onStart(value.id, eve);
            });

            value.addEventListener("animationend", (eve) => {
                if (typeof this.onEnd === "function") this.onEnd(value.id, eve);
            });

            if (!value.id)
                throw Error("The attribute ID is required");
            if (!key)
                this.sectionCurrent = value;
        });
    }

    goTo(sectionId) {
        let currentsec = this.sectionCurrent,
            gosec = this.HTMLSectionsElements[sectionId];

        this.sectionCurrent = this.HTMLSectionsElements[sectionId];

        if (currentsec.classList.contains("sw_select_in"))
            currentsec.classList.remove("sw_select_in");
        else if (gosec.classList.contains("sw_select_out"))
            gosec.classList.remove("sw_select_out");

        currentsec.classList.add("sw_select_out");
        gosec.classList.add("sw_select_in");

        if (typeof this.restart === "function") restart();
    }
};

export default new Swittcher();
