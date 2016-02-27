import React, { Component } from 'react';
import InputMutator from "./main/inputMutator.jsx";
import _ from 'underscore';

export default class Main extends Component {
    componentDidMount() {
        var mutator,
            iconType,
            inter,
            executedAni,
            circles = document.querySelectorAll(".quest_circles > li");

        // ANIMATIONS EXTRAS 
        inter = 200;
        executedAni = 0;

        // anima el icon user.
        iconType = document.getElementById("icon_type");
        iconType.className = "icon_type_animate";

        // start animation start circles quest.
        _.each(circles, (element, key) => {
            setTimeout(() => {
                executedAni++;
                element.className = "circlesInit";
                // agrege una clase especial para poner el primero ciculo en focus.
                if (circles.length == executedAni) {
                    circles[2].addEventListener("animationend", () => {
                        circles[0].className = 'circleFocus';
                    });
                }
            }, inter);
            inter += inter;
        });
    }

    render() {
        return (
            <div className="main-main">
            <div className="main__st_top"></div>
            <div className="main__st_mid">
                <div className="conta_input_mutator">
                    <ul className="quest_circles">
                        <li className="classAut0"></li>
                        <li className="other"></li>
                        <li className="start"></li>
                    </ul>
                    <InputMutator/>
                </div>
            </div>
            <div className="main__st_bot"></div>
        </div>
        )
    }
};
