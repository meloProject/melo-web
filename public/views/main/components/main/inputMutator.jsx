import React, { Component } from "react";
import _ from "underscore";

export default class InputMutator extends Component {

    constructor() {
        super();

        // mutator preferences
        this.state = {
            icon: "child colorChild",
            placeholder: "Apodo"
        };

        this.mutatorList = [{
            icon: "child colorChild",
            placeholder: "Apodo"
        }, {
            icon: "lock colorLock",
            placeholder: "Tu contraseña"
        }, {
            icon: "rocket colorRocket",
            placeholder: "Estamos listos!"
        }];

        this.main;
        this.mutator;
        this.circles;
        this.inptMut;
        this.circlesSection = 0;

        this.iteratorError = 0;
    }

    changeInput(event) {
        if (!this.mutator) {
            this.mutator = document.getElementById("mutator");
            this.circles = document.querySelectorAll(".quest_circles > li");
            this.inptMut = document.querySelector(".input_mutator");
        }

        // check empty input
        if (!this.inptMut.value) {
            // intercambia las clases para volver a animar, cada vez que el usuario no resuelve el conflicto.
            if (this.iteratorError) {
                this.mutator.className = "ul_mutator_error_iterator";
                this.iteratorError = 0;
                this.setState({
                    placeholder: this.mutatorList[this.circlesSection].placeholder + " hey!"
                });
            } else {
                this.mutator.className = "ul_mutator_error";
                this.iteratorError = 1;
            }

            this.main = document.getElementById("main-main");
            this.main.className = "main-main_error";

            return;
        }
        // va a ser true si se se presento un error.
        if (this.main) this.main.className = "main-main";

        // se activa la animacion de incio. 
        this.mutator.className = "ul_mutator_out";
        this.inptMut.value = "";
        this.mutator.addEventListener("animationend", (event) => {
            if (event.animationName != "inputChangeOut") return;
            if (this.circlesSection == 2) return;
            this.circlesSection++;

            this.setState({
                icon: this.mutatorList[this.circlesSection].icon,
                placeholder: this.mutatorList[this.circlesSection].placeholder
            });

            // efecto de ingreso del input mutator
            this.mutator.className = "ul_mutator_enter";
            this.circles[this.circlesSection].className = "circlesSelected";

            event.preventDefault();
        });
    }

    render() {
        return (
            <div className="con_inputs_mutator">
                <ul className="ul_mutator_enter" id="mutator">
                    <li className="icon_type" id="icon_type">
                        <i className={this.state.icon + " icon"}></i>
                    </li>
                    <li className="input_mut">
                        <input placeholder={this.state.placeholder} type="text" className="input_mutator"/>
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
