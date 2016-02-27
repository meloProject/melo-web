import React, { Component } from 'react';
import _ from 'underscore';

export default class InputMutator extends Component {

    constructor() {
        super();
        this.circlesSection = 0;
    }

    changeInput(event) {
        let mutator = document.querySelector(".ul_mutator_enter"),
        circles = document.querySelectorAll(".quest_circles > li");

        if (!document.querySelector(".input_mutator").value) {
            //document.querySelector(".ul_mutator").className = "";
        }
        mutator.className = "ul_mutator_out";
        mutator.addEventListener("animationend", (event) => {

            if (event.animationName != "inputChangeOut") return;
            if (this.circlesSection == 2) return;

            this.circlesSection++;
            // efecto de ingreso del input mutator
            mutator.className = "ul_mutator_enter";
            circles[this.circlesSection].className = "circlesSelected";
            event.preventDefault();
        });
    }

    render() {
        return (
            <div className="con_inputs_mutator">
                <ul className="ul_mutator_enter">
                    <li className="icon_type" id="icon_type">
                        <i className="child icon"></i>
                    </li>
                    <li className="input_mut">
                        <input placeholder="tu usuario!" type="text" className="input_mutator"/>
                    </li>
                    <li className="icon_arrow" onClick={()=> {
                        this.changeInput.call(this);
                    }}>
                        <i className="chevron down icon"></i>
                    </li>
                </ul>
            </div>
        )
    }
};
