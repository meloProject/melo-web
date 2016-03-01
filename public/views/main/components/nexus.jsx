import React, { Component } from 'react';

export default class Nexus extends Component {

	constructor() {
		super();
	}

    render() {
        function blocks() {
            return (
                <li>
					<div className="selec_li_top"></div>
					<div className="selec_li_mid"></div>
					<div className="selec_li_bot"></div>
				</li>
            )
        }
        return (
			<div className="main-nexus">
			    <div className="con_selection">
			        <div className="stage">
			            <div className="cube">
			                <figure className="back"></figure>
			                <figure className="top"></figure>
			                <figure className="bottom"></figure>
			                <figure className="left"></figure>
			                <figure className="right"></figure>
			                <figure className="front"><i className="tablet icon"></i></figure>
			            </div>
			        </div>
			        <div className="stage">
			            <div className="cube">
			                <figure className="back"></figure>
			                <figure className="top"></figure>
			                <figure className="bottom"></figure>
			                <figure className="left"></figure>
			                <figure className="right"></figure>
			                <figure className="front"><i className="desktop icon"></i></figure>
			            </div>
			        </div>
			    </div>
			</div>
        )
    }
};
