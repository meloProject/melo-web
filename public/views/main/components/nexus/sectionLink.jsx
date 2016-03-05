import React, { Component } from 'react';
import NexusActions from './actions/nexusActions.jsx';
import PanelLL from './panelLL.jsx';

export default class SectionLink extends Component {

    constructor() {
        super();
        // <a onClick={()=> {

        //  NexusActions.goToGeneral("top","section-contact")

        //}}>link</a>
    }

    render() {
        return (
        <section id="section-link">
            <div className="section_link__st_top"></div>
            <div className="section_link__st_mid">

                <PanelLL themeClass="panelLL-alternative"/>

                <div className="link_cn_middle">
                    <div className="link_cn_container">

                        <ul className="link_cn_ul"> 
                            <li>
                                <div className="cn_link">
                                    <div className="top_link_post">
                                        <svg className="icons8 icons8-controller" version="1.0" id="Layer_1" x="0px" y="0px" viewBox="0 0 48 48" enable-background="new 0 0 48 48">
                                        <path fill="#37474F" d="M4,39V7c0-2.2,1.8-4,4-4h22c2.2,0,4,1.8,4,4v32c0,2.2-1.8,4-4,4H8C5.8,43,4,41.2,4,39z"></path>
                                        <path fill="#BBDEFB" d="M30,6H8C7.4,6,7,6.4,7,7v29c0,0.6,0.4,1,1,1h22c0.6,0,1-0.4,1-1V7C31,6.4,30.6,6,30,6z"></path>
                                        <rect x="15" y="39" fill="#78909C" width="6" height="2"></rect>
                                        <path fill="#E38939" d="M24,41V17c0-2.2,1.8-4,4-4h12c2.2,0,4,1.8,4,4v24c0,2.2-1.8,4-4,4H28C25.8,45,24,43.2,24,41z"></path>
                                        <path fill="#FFF3E0" d="M40,16H28c-0.6,0-1,0.4-1,1v22c0,0.6,0.4,1,1,1h12c0.6,0,1-0.4,1-1V17C41,16.4,40.6,16,40,16z"></path>
                                        <circle fill="#A6642A" cx="34" cy="42.5" r="1.5"></circle>
                                        </svg>
                                    </div>
                                    <div className="mid_link_post" />
                                </div>
                            </li>
                            
                            <li>
                                <div>
                                </div>
                            </li>
                        </ul>

                    </div>
                </div>

            </div>
            <div className="section_link__st_bot"></div>
        </section>
        )
    }
};
