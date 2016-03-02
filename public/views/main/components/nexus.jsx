import React, { Component } from 'react';
import LateralPanel from '././standars/panelLateral.jsx';
import Cubes from './nexus/cubes.jsx';
import NexusStore from './stores/nexusStore.jsx';

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

        this.state = this.getState();
        this.onChange = this.onChange.bind(this);
    }

    getState() {
        return NexusStore.getState();
    }
    
    componentDidMount() {
        NexusStore.listen(this.onChange);
    }

    componentWillUnmount() {
        NexusStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
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
                        <LateralPanel/>
				</div>
				<div className="main_nex__st_bot">
					<div className="nex_text_container" id="nex_text_container">
						<span>{this.state.text}</span>
					</div>
				</div>
			</div>
        )
    }
};
