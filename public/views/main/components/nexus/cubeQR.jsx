import React, { Component } from 'react';
import QRcode from 'qrcode.react';
import NexusActions from './actions/nexusActions.jsx';
import Dispositive from './svg/dispositive.jsx';

export default class Cubes extends Component {
    render() {
    	function renderLinkerState(state) {
    		switch(state) {
    			case "normal":
    				return <Dispositive />
    			case "wait":
    				return <p> wait :) </p>
    			default:
    				return <QRcode value={ state } className="box_qrcode" />
    		}
    	}

        return (
			<div className="linker" onClick={ NexusActions.getQr } >	            	
				{
					renderLinkerState(this.props.qrcode)
				}
			</div>
        )
    }
};





