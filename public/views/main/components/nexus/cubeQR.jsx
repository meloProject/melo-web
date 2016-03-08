import React, { Component } from 'react';
import QRcode from 'qrcode.react';
import NexusActions from './actions/nexusActions.jsx';
import Dispositive from './svg/dispositive.jsx';
import WaitFlower from './svg/waitComponents.jsx';

export default class Cubes extends Component {
    constructor() {
        super();
        this.QRconfig = {
            bgcolor: "#FFF",
            fgColor: "#263238",
            size: 128,
            level: "L"
        }
    }
    render() {

    	function renderLinkerState(state) {
    		switch(state) {
    			case "normal":
    				return <Dispositive />
    			case "wait":
    				return <WaitFlower />
    			default:
    				return <QRcode value={ state } fgColor={ this.QRconfig.fgColor } className="box_qrcode" />
    		}
    	}

        return (
			<div className="linker" id="linker" onClick={ NexusActions.getQr } >	            	
				{
					renderLinkerState.call(this, this.props.qrcode)
				}
			</div>
        )
    }
};





