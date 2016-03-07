import React, { Component } from 'react';
import PanelLL from './panelLL.jsx';

export default class SectionContact extends Component {
    render() {
        return (
        <section id="section-contact" className={ this.props.sectionClass }>
            <div className="section_contact__st_top"></div>
            <div className="section_contact__st_mid">

                <PanelLL />
                <div className="contact_cn_middle">
                    <div className="contact_cn_container">
                        <p>Juegos mentales</p>
                    </div>
                </div>
            </div>
            <div className="section_contact__st_bot"></div>
        </section>
        )
    }
};
