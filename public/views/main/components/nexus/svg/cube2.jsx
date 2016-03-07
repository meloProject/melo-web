import React, { Component } from 'react';
export default class Cubes2 extends Component {
    render() {
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
};
