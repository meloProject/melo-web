import React, { Component } from 'react';
import Cubes from './nexus/cubes.jsx';
import NexusStore from './stores/nexusStore.jsx';

export default class Nexus extends Component {

    constructor() {
        super();

        this.state = {
        	textItem: NexusStore.itemTextDescrition 
        };

        this.cubes = [{
            figure: "female",
            description: "chica"
        }, {
            figure: "alien",
            description: "marciano"
        }, {
            figure: "male",
            description: "chico"
        }];
    }

    render() {

        return (
            <div className="main-nexus">
	             <div className="main_nex__st_top"></div>
	             <div className="main_nex__st_mid">
					    <div className="con_selection">
								{
									this.cubes.map((object, key)=> {
								       	return (<Cubes key={key} figure={object.figure} indent={key} />)
								    })
								}
					    </div>
				</div>
				<div className="main_nex__st_bot">
					<div className="nex_text_container">
						
					</div>
				</div>
			</div>
        )
    }
};
