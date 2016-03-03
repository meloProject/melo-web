import React, { Component } from 'react';
import NexusActions from './actions/nexusActions.jsx';
import _ from 'underscore';

export default class Cubes extends Component {
    animateTextBoxOut() {
        document.getElementById("nex_text_container")
            .className = "nex_text_container_out";
    }

    render() {

        function svgFigure(figure) {
            switch (figure) {
                case "male":
                    return (
                        <svg version="1.0" x="0px" y="0px" width="48px" height="48px" viewBox="0 0 48 48" className="icons8 icons8-User-Male">
						<g>
						<path fill="#FFA726" d="M14,27c0,2.209-1.791,4-4,4s-4-1.791-4-4s1.791-4,4-4S14,24.791,14,27"></path>
						<path fill="#FFA726" d="M42,27c0,2.209-1.791,4-4,4s-4-1.791-4-4s1.791-4,4-4S42,24.791,42,27"></path>
						</g>
						<path fill="#FFB74D" d="M9,20c0-12.725,30-8.284,30,0v10c0,8.284-6.716,15-15,15S9,38.284,9,30V20z"></path>
						<path fill="#424242" d="M40.891,19.338C40.417,13.365,38.33,7.482,31,6l-2-3h-5C14.772,3,7,10.48,7,21v3.4l3,3.6v-6l21-7l7,6v7	l3-3.6V21C41,20.436,40.957,19.883,40.891,19.338"></path>
						<g>
						<path fill="#784719" d="M33,28c0,1.105-0.895,2-2,2s-2-0.895-2-2s0.895-2,2-2S33,26.895,33,28"></path>
						<path fill="#784719" d="M19,28c0,1.105-0.895,2-2,2s-2-0.895-2-2s0.895-2,2-2S19,26.895,19,28"></path>
						</g>
						<path fill="#FB8C00" d="M19,37h10c0,0-2,3-5,3S19,37,19,37z"></path>
					</svg>
                    )
                case "female":
                    return (
                        <svg version="1.0" x="0px" y="0px" width="48px" height="48px" viewBox="0 0 48 48" className="icons8 icons8-User-Female">
						<path fill="#BF360C" d="M35,44c0,0-6-2-11-2s-11,2-11,2V32h22V44z"></path>
						<g>
						<path fill="#FFA726" d="M14,28c0,2.209-1.791,4-4,4s-4-1.791-4-4s1.791-4,4-4S14,25.791,14,28"></path>
						<path fill="#FFA726" d="M42,28c0,2.209-1.791,4-4,4s-4-1.791-4-4s1.791-4,4-4S42,25.791,42,28"></path>
						</g>
						<path fill="#FFB74D" d="M38,18c0-12.725-28-8.284-28,0v9c0,8.284,6.269,15,14,15s14-6.716,14-15V18z"></path>
						<g>
						<path fill="#784719" d="M32,26c0,1.105-0.895,2-2,2s-2-0.895-2-2s0.895-2,2-2S32,24.895,32,26"></path>
						<path fill="#784719" d="M20,26c0,1.105-0.895,2-2,2s-2-0.895-2-2s0.895-2,2-2S20,24.895,20,26"></path>
						</g>
						<path fill="#FF5722" d="M24,4C15.495,4,3,9,2.875,36L13,44V24l16.75-9l5.125,7L35,44l10-8c0-12-0.543-29-15-29l-2-3H24z"></path>
						<path fill="#FB8C00" d="M19,35h10c0,0-2,3-5,3S19,35,19,35z"></path>
					</svg>
                    )
                case "alien":
                    return (
                        <svg version="1.1" x="0px" y="0px"  width="48px" height="48px" viewBox="0 0 48 48" className="icons8 icons8-Alien">
						<g>
							{/* ANTS */}
							<path className="ant-right" fill="#8E24AA" d="M31,13.8l2,0.3C33.5,11,36.3,9,40,9V7C35.3,7,31.7,9.7,31,13.8z"></path>
							<path className="ant-letf" fill="#8E24AA" d="M8,7v2c3.7,0,6.5,2,7,5.2l2-0.3C16.3,9.7,12.7,7,8,7z"></path>
						</g>
						<g>
							<path fill="#BA68C8" d="M24,10.2c-9.5,0-17.3,9.5-17.3,19S14.5,43,24,43s17.3-4.3,17.3-13.8S33.5,10.2,24,10.2z"></path>
							{/* ANTS POINTS */}
							<circle className="ant-right" fill="#BA68C8" cx="40" cy="8" r="3"></circle>
							<circle className="ant-letf" fill="#BA68C8" cx="8" cy="8" r="3"></circle>
						</g>
						<path fill="#FFF" d="M24,33c-4.5,0-8-3.5-8-8s3.5-8,8-8s8,3.5,8,8S28.5,33,24,33z"></path>
							{/* EYE */}
							<circle className="alien-eye" fill="#333" cx="24" cy="25" r="4"></circle>
							<circle fillOpacity="0.2" className="alien-eye" fill="#FFFFFF" cx="26.5" cy="22.5" r="2.5"></circle>
						<path className="alien-mouth" fill="#6A1B9A" d="M30.9,38c0,0-3.3,1.7-6.9,1.7S17.1,38,17.1,38s4.1,0,6.9,0S30.9,38,30.9,38z"></path>
					</svg>
                    )
            }
        }

        return (
            <div className="stage">
		            <div className="cube"
		            	
		            	onClick={()=> {
		            		NexusActions.cubeGoTo(this.props.figure) }} 

		            	onMouseOver={()=> {

		            		NexusActions.settext(this.props.figure) }} 

		            	onMouseOut={()=> {

		            		this.animateTextBoxOut() }}
		            	>
					    <figure className={"back" + " figure" + this.props.indent}></figure>
					    <figure className={"top" + " figure" + this.props.indent}></figure>
					    <figure className={"bottom" + " figure" + this.props.indent}></figure>
					    <figure className={"left" + " figure" + this.props.indent}></figure>
					    <figure className={"right" + " figure" + this.props.indent}></figure>
					    <figure className={"front" + " figure" + this.props.indent}>
							{
								svgFigure(this.props.figure)
							}
					    </figure>
					</div> 
				</div>
        )
    }
};
