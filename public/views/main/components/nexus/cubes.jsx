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
					<svg className="icons8 icons8-User-Female" version="1.1" x="0px" y="0px" width="48px" height="48px" viewBox="0 0 48 48" enable-background="new 0 0 48 48">
						<path fill="#E39D36" d="M32.449,29.093L19.271,36.92c-0.025,0,3.074,4.029,3.074,4.029l12.605-7.647
						c1.15-0.692,1.527-2.182,0.848-3.338C35.114,28.799,33.615,28.408,32.449,29.093"></path>
						<path fill="#689F38" d="M32.732,13.157C31.147,8.502,23.766,5.693,22.031,5c0.756,2.881-4.762,8.823-2.47,13.207
						c1.62,3.104,4.583,3.984,7.995,0.763C31.318,19.92,33.854,16.453,32.732,13.157z"></path>
						<g>
						<path fill="none" stroke="#8BC34A" stroke-width="2" stroke-linecap="round" d="M23.879,12.55C27.579,16.783,27,25,27,25"></path>
						<path fill="#8BC34A" d="M19.562,18.207C17.27,13.823,22.787,7.881,22.031,5c0,0,0,0,0.001,0.001
						c1.514,1.677,3.459,5.503,5.547,13.973c-0.008-0.001-0.015-0.002-0.022-0.004C24.145,22.191,21.182,21.311,19.562,18.207z"></path>
					</g>
					<g>
						<circle fill="#795548" cx="24" cy="27" r="3"></circle>
						<circle fill="#795548" cx="30" cy="32" r="3"></circle>
						<ellipse fill="#795548" cx="26.5" cy="29" rx="3.5" ry="3"></ellipse>
						<circle fill="#795548" cx="20" cy="28" r="3"></circle>
						<circle fill="#795548" cx="28.5" cy="26.5" r="2.5"></circle>
						<circle fill="#795548" cx="34" cy="30" r="2"></circle>
						<circle fill="#795548" cx="31.5" cy="27.5" r="2.5"></circle>
					</g>
					<path fill="#FFB74D" d="M38.9,30.431l-12.356,7.338c-0.028,0,0.029,0,0,0l-5.867-3.358l2.949,1.608
						c1.288,0.702,2.935,0.481,3.892-0.628c1.322-1.534,0.858-3.816-0.842-4.747l-12.351-6.77c-1.149-0.63-2.543-0.618-3.683,0.029
						l-5.601,3.185C5.027,27.112,5.016,27.134,5,27.158v10.684l4.045-2.55l15.107,8.246c1.178,0.644,2.608,0.613,3.758-0.08l13.771-8.349
					c1.278-0.77,1.698-2.424,0.942-3.71C41.863,30.104,40.197,29.67,38.9,30.431"></path>
					<g>
						<path fill="#EDA740" d="M27.518,35.391c-0.742,0.859-1.896,1.179-2.979,0.955l-0.236,0.14l2.241,1.283L38.9,30.431
							c0.105-0.063,0.218-0.104,0.327-0.15c-0.72-1.049-2.132-1.386-3.247-0.731l-7.822,4.646C28.039,34.617,27.832,35.025,27.518,35.391
						z"></path>
						<path fill="#EDA740" d="M26.492,37.798l0.053-0.029l-1.368-0.876l-10.683-6.041l8.035,6.589
						C23.652,38.361,25.224,38.502,26.492,37.798"></path>
					</g>
					<path fill="#FFCC80" d="M24.449,35.16c-0.902-0.466-0.574-1.275-0.109-2.177c0.467-0.902,0.896-1.555,1.798-1.089
					c0.901,0.466,1.255,1.575,0.789,2.477C26.461,35.273,25.352,35.626,24.449,35.16"></path>
					</svg>
                    )
                case "female":
                    return (
                    
					<svg className="icons8 icons8-User-Male" version="1.1" x="0px" y="0px" viewBox="0 0 48 48">
					<polygon style={{ fill: "#C5CAE9" }} points="43,5 17.963,30.037 15.817,27.891 34.416,6.431 "></polygon>
					<polygon style={{ fill: "#9FA8DA" }} points="43,5 17.963,30.037 20.109,32.183 41.569,13.584 "></polygon>
					<path style={{ fill: "#FFB300"}} d="M19.751,36.117l-7.869-7.869c-0.593-0.593-0.593-1.553,0-2.146l0,0c0.593-0.593,1.553-0.593,2.146,0
					l7.869,7.869c0.593,0.593,0.593,1.553,0,2.146l0,0C21.305,36.71,20.344,36.71,19.751,36.117z"></path>
					<path style={{ fill: "#FFB300" }} d="M10.452,42.556l-5.007-5.007c-0.593-0.593-0.593-1.553,0-2.146l0,0c0.593-0.593,1.553-0.593,2.146,0
					l5.007,5.007c0.593,0.593,0.593,1.553,0,2.146h0C12.005,43.148,11.044,43.148,10.452,42.556z"></path>
					<rect x="10.365" y="29.925" transform="matrix(0.7071 0.7071 -0.7071 0.7071 27.5017 1.5478)" style={{fill:"#EF6C00"}} width="3.035" height="8.093"></rect>
					<rect x="12.511" y="32.071" transform="matrix(0.7071 0.7071 -0.7071 0.7071 29.6478 0.6589)" style={{fill:"#D44B00"}} width="3.035" height="8.093"></rect>
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
		            		NexusActions.goTo(this.props.figure) }} 

		            	onMouseOver={()=> {

		            		NexusActions.setText(this.props.figure) }} 

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
