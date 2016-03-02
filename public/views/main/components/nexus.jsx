import React, { Component } from 'react';
import Cubes from './nexus/cubes.jsx';

export default class Nexus extends Component {

    constructor() {
        super();
        this.cubes = [{
            figure: "female"
        }, {
            figure: "alien"
        }, {
            figure: "male"
        }];
    }

    render() {
        return (
            <div className="main-nexus">
			    <div className="con_selection">
				     
						{
							this.cubes.map((object, key)=> {
						       	return <Cubes key={key} figure={object.figure} indent={key}/>
						    })
						}

			    </div>
			</div>
        )
    }
};
