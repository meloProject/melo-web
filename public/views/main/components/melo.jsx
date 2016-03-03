import React, { Component } from 'react';
import LateralPanel from '././standars/panelLateral.jsx';

export default class Melo extends Component {
    render() {
        var sectionsSt = { height: 0, display: "none" }

        return (
            <div id="meloContainer" className="main-melo">
	            {this.props.children}
				<LateralPanel/>
		    </div>
        )
    }
};


