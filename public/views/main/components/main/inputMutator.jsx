import React, { Component } from "react";
import { Link } from "react-router";
import _ from "underscore";

export default class InputMutator extends Component {
    constructor() {
        super();


        // mutator preferences
        this.state = {
            icon: "child colorChild",
            placeholder: "usuario",
            changePage: false
        };

        this.mutatorList = [{
            icon: "child colorChild",
            placeholder: "usuario"
        }, {
            icon: "lock colorLock",
            placeholder: "contraseña"
        }];

        this.main;
        this.mutator;
        this.circles;
        this.inptMut;
        this.circlesSection = 0;
        this.iteratorError = 0;

        this.changeInput = this.changeInput.bind(this);
        this.changePage = this.changePage.bind(this);
    }

    componentDidMount() {
        // anima el icon user.
        var iconType = document.getElementById("icon_type");
        iconType.className = "icon_type_animate";
    }

    changePage(event) {
        document.querySelector(".mut_links").click();
    }

    changeInput(event) {
        /* hay que controlar la animacion del main ya que se hacen repetciones de error muy rapido y luego
        se resuelve y se pasa a la proxima pantalla la animacion se sigue ejecutando. */

        if (!this.mutator) {
            this.mutator = document.getElementById("mutator");
            this.circles = document.querySelectorAll(".quest_circles > li");
            this.inptMut = document.querySelector(".input_mutator");
        }

        // check empty input
        if (!this.inptMut.validity.valid) {

            // intercambia las clases para volver a animar, cada vez que el usuario no resuelve el conflicto.
            if (this.iteratorError) {
                this.mutator.className = "ul_mutator_error_iterator";
                this.iteratorError = 0;
            } else {
                this.mutator.className = "ul_mutator_error";
                this.iteratorError = 1;
            }

            // en caso de ser invalido el contenedor:
            this.main = document.getElementById("mainContainer");
            this.main.className = "main-main_error";

            if (this.circlesSection > 0) {
                this.setState({
                    changePage: false
                });
            }

            return;

        }

        // en caso de ser valido el input mutator:
        if (this.main) this.main.className = "main-main";

        // se activa la animacion de retiro del mutator. 
        this.mutator.className = "ul_mutator_out";
        this.inptMut.value = "";

        this.mutator.addEventListener("animationend", (event) => {

            if (event.animationName != "inputChangeOut") return;
            if (this.circlesSection == 1) {
                // aacciones para ir al proxima pagina.
                this.setState({
                    changePage: true
                });

                this.changePage();
                return;
            }

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
        function changePage() {
            if (!this.state.changePage) {
                return (
                    <a className="mut_links" onClick={ this.changeInput }>
                        <li className="icon_arrow">
                            <i className="chevron down icon"></i>
                        </li>
                    </a>
                )
            } else {
                return (
                    <Link to="/nexus" className="mut_links" onClick={ this.changePage }>
                        <li className="icon_arrow">
                            <i className="chevron down icon"></i>
                        </li>
                    </Link>
                )
            }
        }

        return (
            <div className="con_inputs_mutator">
            <ul className="ul_mutator_enter" id="mutator">
                <li className="icon_type" id="icon_type">
                    <i className={this.state.icon + " icon"}></i>
                </li>
                <li className="input_mut">
                    <input required pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{5,20}$" placeholder={this.state.placeholder} type="text" className="input_mutator"/>
                </li>
                 {
                    changePage.call(this)
                 }
            </ul>
        </div>
        )
    }
};
