import React, { Component } from 'react';
import NexusActions from './actions/nexusActions.jsx';

export default class PanelLL extends Component {
    render() {
        return (
            <div className="cn_panelLateralLeft">
                <ul className={ this.props.themeClass || "ul_panelLL" } >
                    <li onClick={()=> {
                        NexusActions.goToGeneral("top","section-type")
                        }}>
                        <span></span>
                        <i className="arrow up icon"></i>
                    </li>
                    <li onClick={()=> {
                        NexusActions.goToGeneral("bot","section-link")
                        }}>
                        <span></span>
                        <i className="arrow down icon"></i>
                    </li>
                </ul>
            </div>
        )
    }
};
