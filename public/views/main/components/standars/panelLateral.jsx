import React, { Component } from 'react';
import NexusActions from '.././nexus/actions/nexusActions.jsx';

export default class PanelLateral extends Component {
    render() {
        return (
            <div className="panel_l_container">
            	<ul className="ul_panel_lateral" style={{color: this.props.fontColor}}>
            		<li>
            			<i className="volume up icon"></i>
            		</li>
            		<li>
            		    <i className="unmute icon"></i> 
            		</li>
            	</ul>
		    </div>
        )
    }
};
