import React, { Component } from 'react';
import Annuncer from './svg/annuncer.jsx';

export default class InopportuneMessenger extends Component {
    render() {

        var stlyeInopp = {
             top: this.props.y || 20,
             left: this.props.x || 20
        }

    	return (

    		<div className="cn_inopportune" style={ stlyeInopp } >
    			<div className="inopportune_head">
    				<ul className="ul_announcer">
    					<li>
                            <Annuncer />
    					</li>
    				</ul>
    			</div>
    			<div className="inopportune_body">
    				<ul className="ul_text_annuncer">
    					<li>
                            <p>Nadie por aqui quiere poner a prueba tu paciencia
                               aguarda unos segundos :)</p>
    					</li>
    				</ul>
    			</div>
    		</div>
        )
    }
};
