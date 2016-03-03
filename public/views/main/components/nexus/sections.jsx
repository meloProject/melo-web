import React, { Component } from 'react';
import Cubes from './cubes.jsx';
import Swittcher from './../standars/swittcher.js';

export default class Sections extends Component {

    constructor() {
        super();
        this.cubes = [{
            figure: "female"
        }, {
            figure: "alien"
        }, {
            figure: "male"
        }];
    }

    componentDidMount() {
        Swittcher.init();
    }

    render() {
        return (
            <div className="main-nexus" id="swittcher">
                 <section>
                     <div className="main_nex__st_top"></div>
                     <div className="main_nex__st_mid">
                        <div className="con_selection">
                            {
                                this.cubes.map((object, key)=> {
                                    return (<Cubes key={key} figure={object.figure} indent={key} />)
                                })
                            }
                        </div>
                    </div>
                    <div className="main_nex__st_bot">
                        <div className="nex_text_container" id="nex_text_container">
                            <span>{this.props.text}</span>
                        </div>
                    </div>
                </section>

                <section style={{ background: this.props.background }}>
                </section>
            </div>
        )
    }
};
