import React, { Component } from 'react';
import QRcode from 'qrcode.react';
import NexusActions from './actions/nexusActions.jsx';
// cubes svg img
import Dispositive from './svg/dispositive.jsx';

export default class Cubes extends Component {
    render() {
        return (
            <div className="stage">
	            <div className="cube"
	            	
	            	onClick={ NexusActions.getQr } 

	            	>
				    <figure className={"back" + " figure" + this.props.indent}>
				    	{ 
				    		this.props.qrcode ? (
				    				<QRcode value={ this.props.qrcode } />
				    			): 
				    		(
				    				<p> wait :) </p>
				    			)
				    	}
				    </figure>
				    <figure className={"top" + " figure" + this.props.indent}></figure>
				    <figure className={"bottom" + " figure" + this.props.indent}></figure>
				    <figure className={"left" + " figure" + this.props.indent}></figure>
				    <figure className={"right" + " figure" + this.props.indent}></figure>
				    <figure className={"front" + " figure" + this.props.indent}>
					<Dispositive />
				    </figure>
				</div> 
			</div>
        )
    }
};





