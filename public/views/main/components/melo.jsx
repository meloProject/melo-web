import React, { Component } from 'react';

export default class Melo extends Component {
    render() {
        return (
            <div id="meloContainer" className="main-melo">
				{this.props.children}
		    </div>
        )
    }
};
