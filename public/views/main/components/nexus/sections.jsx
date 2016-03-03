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

    test(go) {
        console.log(go)
        Swittcher.goTo(go)
    }

    render() {
        return (
            <div className="main-nexus" id="swittcher">
                 <section id="section-type">
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
                            <span>{this.props.textType}</span>
                        </div>
                    </div>
                </section>

                <section id="section-link" className={ this.props.sectionClass }>
                 <a onClick={()=> {
                        this.test("section-type")
                    }}>type</a> 
                    <br/>
                    <a onClick={()=> {
                        this.test("section-test")
                    }}>test</a>
                </section>

                <section id="section-test">
                    <a onClick={()=> {
                        this.test("section-link")
                    }}>link</a>
                </section>
            </div>
        )
    }
};
