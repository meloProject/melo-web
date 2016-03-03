import React, { Component } from 'react';
import NexusActions from '.././nexus/actions/nexusActions.jsx';

export default class PanelLateral extends Component {
    render() {
        return (
            <div className="panel_l_container">
            	<ul className="ul_panel_lateral">
            		<li>
            			<i className={"volume up icon " + this.props.classLateralIcons}></i>
            		</li>
            		<li>
            		    <i className={"unmute icon " + this.props.classLateralIcons}></i> 
            		</li>
            	</ul>
		    </div>
        )
    }
};
