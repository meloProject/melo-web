import React, { Component } from 'react';
import CubeQr from './cubeQR.jsx';
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
                    <div className="sec_link_md_left">
                        <PanelLL themeClass="panelLL-alternative"/>
                        </div>
                        <div className="sec_link_md_mid">
                            <div className="link_cn_middle">
                                <div className="link_cn_container">
                                    <ul className="link_cn_ul">
                                        <li>
                                            <div className="cn_link">
                                                <div className="top_link_post">
                                                    <CubeQr qrcode={ this.props.qrcode }/>
                                                </div>
                                                <div className="mid_link_post">
                                                    <p>conectarnos</p>
                                                </div>
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
                        <div className="sec_link_md_right"></div>
                    </div>
                    <div className="section_link__st_bot"></div>
                </section>
        )
    }
};
