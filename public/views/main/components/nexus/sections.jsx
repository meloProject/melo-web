import React, { Component } from 'react';
import Swittcher from './../standars/swittcher.js';
import NexusActions from './actions/nexusActions.jsx';
import SectionLink from './sectionLink.jsx';
import Cubes from './cubes.jsx';

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

                <SectionLink sectionClass={ this.props.sectionClass  }/>


                <section id="section-next">
                    <a onClick={()=> {
                        
                         NexusActions.goToGeneral("top","section-link")

                    }}>link</a>
                </section>

            </div>
        )
    }
};
