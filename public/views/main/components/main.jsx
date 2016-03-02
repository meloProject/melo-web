import React, { Component } from 'react';
import InputMutator from "./main/inputMutator.jsx";
import MutatorMessages from "./main/mutatorMessages.jsx";
import _ from 'underscore';

export default class Main extends Component {
    componentDidMount() {
        var mutator,
            iconType,
            inter,
            executedAni,
            circles = document.querySelectorAll(".quest_circles > li");

        // ANIMATIONS EXTRAS 
        inter = 50; // animation call velocity
        executedAni = 0;

        // start animation start circles quest.
        _.each(circles, (element, key) => {
            setTimeout(() => {
                executedAni++;
                element.className = "circlesInit";
                // agrege una clase especial para poner el primero ciculo en focus.
                if (circles.length == executedAni) {
                    circles[1].addEventListener("animationend", () => {
                        circles[0].className = 'circleFocus';
                    });
                }
            }, inter);
            inter += inter;
        });
    }

    render() {
        return (
            <div id="mainContainer" className="main-main">
            <div className="main__st_top"></div>
            <div className="main__st_mid">
                <div className="conta_input_mutator">
                    <ul className="quest_circles">
                        <li className="username"></li>
                        <li className="password"></li>
                    </ul>
                    <InputMutator/>
                </div>
                <MutatorMessages/>
            </div>
            <div className="main__st_bot"></div>
        </div>
        )
    }
};
