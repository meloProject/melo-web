import React, { Component } from 'react';
import NexusActions from './actions/nexusActions.jsx';
import Cubes from './cubes.jsx';

export default class SectionType extends Component {
    constructor() {
        super();
        
        this.cubes = [{
            figure: "cube1"
        }, {
            figure: "cube2"
        }, {
            figure: "cube3"
        }];

    }

    mouseOut() {
        document.getElementById("nex_text_container")
         .className = "nex_text_container_out";
    }

    render() {

        return (
            <section id="section-type">
                <div className="section_type__st_top"></div>
                <div className="section_type__st_mid">

                    <div className="sec_type_md_left"></div>
                    
                    <div className="sec_type_md_mid">
                        <div className="con_selection">
                            {
                                this.cubes.map((object, key)=> {
                                return ( 
                                        <Cubes 
                                            key={key} 
                                            figure={object.figure} 

                                            click={ ()=> {
                                                NexusActions.goTo(object.figure)
                                                } 
                                            }
                                            over= { ()=> {
                                                NexusActions.setText(object.figure) 
                                                }
                                            }

                                            out= { this.mouseOut }

                                            indent={key} />
                                        )
                                })
                            }
                        </div>
                    </div>
                    <div className="sec_type_md_right"></div>

                </div>
                <div className="section_type__st_bot">
                    <div className="nex_text_container" id="nex_text_container">
                        <span>{ this.props.textType }</span>
                    </div>
                </div>
            </section>
        )
    }
};
