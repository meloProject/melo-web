import React, { Component } from 'react';
import QRcode from 'qrcode.react';

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
                case "wait":
                    return <span></span>
    			case "normal":
    				return <span></span>
    			default:
    				return <QRcode value={ state } fgColor={ this.QRconfig.fgColor } className="box_qrcode" />
    		}
    	}

        return (
			<div className="linker" id="linker">	            	
				{
					renderLinkerState.call(this, this.props.qrcode)
				}
			</div>
        )
    }
};





