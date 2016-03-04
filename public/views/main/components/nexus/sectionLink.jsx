import React, { Component } from 'react';
import NexusActions from './actions/nexusActions.jsx';

export default class SectionLink extends Component {

    constructor() {
        super();
    }

    componentDidMount() {}

    render() {
        return (
            <section id="section-link" className={ this.props.sectionClass }>
                <div className="cn_panelLateralLeft">
                    <ul className="ul_panelLL">
                        <li onClick={()=> {
                            NexusActions.goToGeneral("top","section-type")
                            }}>
                            <i className="arrow up icon"></i>
                        </li>
                        <li onClick={()=> {
                            NexusActions.goToGeneral("bot","section-next")
                            }}>
                            <i className="arrow down icon"></i>
                        </li>
                    </ul>
                </div>
            </section>
        )
    }
};
